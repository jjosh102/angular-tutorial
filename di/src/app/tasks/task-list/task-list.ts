import { Component, signal } from '@angular/core';
import { TaskItem } from "./task-item/task-item";

@Component({
  selector: 'app-task-list',
  imports: [TaskItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  selectedFilter = signal<string>('all');
  tasks = [];

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
