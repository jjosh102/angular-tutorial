import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [CommonModule,DragDropModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 items = [
    'Item 1: This is the first card',
    'Item 2: This is the second card',
    'Item 3: This is the third card',
    'Item 4: This is the fourth card',
    'Item 5: This is the fifth card'
  ];

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
