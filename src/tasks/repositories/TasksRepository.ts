import { PENDING } from '../../constants/Status';
import { ITask } from '../models/ITask';

const DEFAULT_TASK: ITask = { id: '1', title: 'Add new tasks', status: PENDING };

class TasksRepository {
  private static tasks: ITask[] = [DEFAULT_TASK];

  public static getAllTasks(): ITask[] {
    return this.tasks;
  }

  public static addTask(task: ITask): ITask {
    const lastId = this.tasks[this.tasks.length - 1].id;
    task.id = (Number(lastId) + 1).toString();
    this.tasks.push(task);
    return task;
  }

  public static clearTasks(): ITask[] {
    this.tasks = [DEFAULT_TASK];
    return this.tasks;
  }
}

export default TasksRepository;
