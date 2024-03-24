import { Router } from 'express';
import HealthRoutes from './health.routes';

const routes: Router = Router();

routes.use('/health', HealthRoutes);

export default routes;
