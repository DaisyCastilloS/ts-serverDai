import Koa, { Context, Next } from 'koa';
import cors from 'koa-cors';
import bodyParser from 'koa-bodyparser';
import { KoaServerWrapperInterface } from '../../3.1service/interface/KoaServerWrapper';
import { PinoLoggerWrapperInterface } from '../../3.1service/interface/PinoLoggerWrapper';
import routes from './routes/index.routes';

export default class KoaServer implements KoaServerWrapperInterface {
  private app: Koa;

  private logger: PinoLoggerWrapperInterface;

  constructor(logger: PinoLoggerWrapperInterface) {
    this.logger = logger; // Mover esta línea arriba
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
