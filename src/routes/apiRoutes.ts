import { Router } from 'express';
import TaskRoutes from '../tasks/routes/TasksRoutes';

const router = Router();

const allRoutes = [
    ...TaskRoutes
];

allRoutes.forEach((route) => {
  const { method, path, handler } = route;
  (router as any)[method](path, handler);
});

export default router;