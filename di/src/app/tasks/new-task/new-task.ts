import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  private tasksService = inject(TasksService);

  onAddTask(title: string, description: string) {
    this.tasksService.addTask({ title, description });
    this.formEl()?.nativeElement.reset();
  }
}
