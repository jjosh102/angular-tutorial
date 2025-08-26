import { Component, inject, input, output } from '@angular/core';
import { TaskModel } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  task = input.required<TaskModel>();
  complete = output<string>();

  tasksService = inject(TasksService);

  onCompleteTask(): void {
    this.tasksService.removeTask(this.task().id);
  }

}
