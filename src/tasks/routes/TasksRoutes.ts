// src/routes/taskRoutes.ts
import TaskController from '../controllers/TasksController';
import IRoute from '../../utils/baseInterfaces/IRoute';

const URL_BASE = '/tasks';
const taskController = new TaskController();

const routes: IRoute[] = [
  {
    path: URL_BASE,
    method: 'get',
    handler: [taskController.getTasks],
  },
  {
    path: URL_BASE,
    method: 'post',
    handler: [taskController.createTask],
  },
  {
    path: `${URL_BASE}`,
    method: 'delete',
    handler: [taskController.deleteTasks],
  },
];

export default routes;
