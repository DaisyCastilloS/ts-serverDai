import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { KoaServerWrapperInterface } from '../../3.1service/interface/KoaServerWrapper';
import { LoggerWrapperInterface } from '../../3.1service/interface/LoggerWrapper';
import routes from './routes/index.routes';

export default class ExpressServer implements KoaServerWrapperInterface {
  private server: Express;

  private logger: LoggerWrapperInterface;

  constructor(logger: LoggerWrapperInterface) {
    this.server = express();
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use((req: Request, res: Response, next) => {
      this.logger.info(`Method ${req.method}, to endpoint ${req.url}`);
      next();
    });
    this.server.use('/api', routes);
    this.logger = logger;
  }

  start(port: number): void {
    this.server.listen(port, () => {
      this.logger.info(`Running on port ${port}`);
    });
  }
}
