import Koa, { Context, Next } from 'koa';
import cors from 'koa-cors';
import bodyParser from 'koa-bodyparser';
import { KoaServerWrapperInterface } from '../../3.1service/interface/KoaServerWrapper';
import { LoggerWrapperInterface } from '../../3.1service/interface/LoggerWrapper';
import routes from './routes/index.routes';

export default class KoaServer implements KoaServerWrapperInterface {
  private app: Koa;

  private logger: LoggerWrapperInterface;

  constructor(logger: LoggerWrapperInterface) {
    this.logger = logger;
    this.app = new Koa();
    this.app.use(cors());
    this.app.use(bodyParser());
    this.app.use(async (ctx: Context, next: Next) => {
      this.logger.info(`Method ${ctx.method}, to endpoint ${ctx.url}`);
      await next(); // Espera la ejecución del siguiente middleware
    });
    this.app.use(routes.routes());
    this.app.use(routes.allowedMethods());
  }

  start(port: number): void {
    this.app.listen(port, () => {
      this.logger.info(`Running on port ${port}`);
    });
  }
}
