import { Component } from '@angular/core';
import { NewTask } from './new-task/new-task';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-tasks',
  imports: [NewTask, TaskList],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {

}
