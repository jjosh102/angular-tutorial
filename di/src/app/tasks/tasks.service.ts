import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { v4 as uuidv4 } from 'uuid';
import { LoggingService } from "../logging";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService);
  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string, description: string }) {
    const newTask: Task = {
      ...taskData,
      id: uuidv4(),
      status: 'OPEN'
    };

    console.dir(newTask);
    this.tasks.update(
      (oldtasks) =>
        [...oldtasks, newTask]
    );
    this.loggingService.log(`Added task with title ${taskData.description}`)
  }

  updateTasksStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldtasks) =>
      oldtasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }
}
