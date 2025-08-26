import { Component, input, signal } from '@angular/core';;
import { Task } from "./task/task";
import { UserModel } from '../user/user.model';
import { NewTask } from "./new-task/new-task";
import { TaskModel } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  user = input<UserModel | undefined>(undefined);
  isAddingTask = signal(false);

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get selectedUserTasks() {
    return this.tasks.filter(t => t.userId === this.user()?.id);
  }

  onTaskCompleted(taskId: string): void {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
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
    this.tasks = [...this.tasks, newTask];
    this.isAddingTask.set(false);
  }
}
