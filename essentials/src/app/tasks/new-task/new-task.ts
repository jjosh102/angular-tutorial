import { Component, output, signal } from '@angular/core';
import { TaskModel } from '../task/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {


  newTask = signal<TaskModel>({
    id: '',
    userId: '',
    title: '',
    summary: '',
    dueDate: ''
  });

  close = output<boolean>();
  add = output<TaskModel>();

  onDialogClose(): void {
    this.close.emit(false);
  }
  onSubmit(): void {
    this.newTask.update(task => ({
      ...task,
      id: `t${Math.random().toString(16).slice(2)}`,
    }));

    this.add.emit(this.newTask());
  }
}
