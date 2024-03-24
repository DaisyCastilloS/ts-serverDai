import express, { Router } from 'express';
import HealthController from '../controller/health.controller';

const ExampleRoutes: Router = express.Router();

ExampleRoutes
  .route('/')
  .get(HealthController.status);

export default ExampleRoutes;
