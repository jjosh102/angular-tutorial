import { Component, input, output } from '@angular/core';
import { TaskModel } from './task.model';


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  task = input.required<TaskModel>();
  complete = output<string>();

  onCompleteTask(): void {
    this.complete.emit(this.task().id);
  }

}
