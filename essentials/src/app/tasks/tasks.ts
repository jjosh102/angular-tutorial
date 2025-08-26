import { Component, inject, input, signal } from '@angular/core';;
import { Task } from "./task/task";
import { UserModel } from '../user/user.model';
import { NewTask } from "./new-task/new-task";
import { TaskModel } from './task/task.model';
import { Card } from "../shared/card/card";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask, Card],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  user = input<UserModel | undefined>(undefined);
  isAddingTask = signal(false);

  private tasksService = inject(TasksService);


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user()?.id ?? '');
  }


  onStartAddTask(): void {
    this.isAddingTask.set(true);
  }

  onDialogClose(isOpen: boolean): void {
    this.isAddingTask.set(isOpen);
  }
  onNewTask(newTask: TaskModel): void {
    if (this.user()) {
      newTask.userId = this.user()!.id;
    }
    this.tasksService.addTask(newTask);
    this.isAddingTask.set(false);
  }
}
