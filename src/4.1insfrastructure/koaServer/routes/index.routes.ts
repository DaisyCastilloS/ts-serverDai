import Router from '@koa/router';
import healthRoutes from './health.routes';

const routes = new Router();

routes.use('/health', healthRoutes.routes());

export default routes;
