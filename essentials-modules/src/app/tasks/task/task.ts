import { Component, inject, input, output } from '@angular/core';
import { TaskModel } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
  standalone: false
})
export class Task {
  task = input.required<TaskModel>();
  complete = output<string>();

  tasksService = inject(TasksService);

  onCompleteTask(): void {
    this.tasksService.removeTask(this.task().id);
  }

}
