import Router from '@koa/router';
import HealthController from '../controller/health.controller';

const exampleRoutes = new Router();

exampleRoutes.get('/', HealthController.status);

export default exampleRoutes;
