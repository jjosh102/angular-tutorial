import { Component, computed, effect, inject, signal } from '@angular/core';
import { TaskItem } from "./task-item/task-item";
import { TasksService } from '../tasks.service';
import { TASK_STATUS_OPTIONS, TaskStatusOptionsProvider } from '../task.model';

@Component({
  selector: 'app-task-list',
  imports: [TaskItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
  providers: [TaskStatusOptionsProvider]
})
export class TaskList {
  private tasksService = inject(TasksService);
  private selectedFilter = signal<string>('all');
  readonly taskStatusOptions = inject(TASK_STATUS_OPTIONS);

  constructor() {
    effect(() => {
      // console.log(this.selectedFilter())
    });
  }


  tasks = computed(() => {
    const filter = this.selectedFilter();
    const tasks = this.tasksService.allTasks();

    const statusMap: Record<string, string> = {
      open: 'OPEN',
      'in-progress': 'IN_PROGRESS',
      done: 'DONE'
    };

    return filter === 'all' ? tasks : tasks.filter(t => t.status === statusMap[filter]);
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
