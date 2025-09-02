import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [DatePipe, DecimalPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  currentDate = signal(new Date());
  currentTemperaturs = signal({
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  });

  historicTemperatures = signal([
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ]);

  onReset(index: number) {
    this.historicTemperatures.update(arr => {
      const newArr = [...arr];
      newArr[index] = 18;
      return newArr;
    });
  }
}
