import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-custom-two-way-binding',
  imports: [],
  templateUrl: './custom-two-way-binding.html',
  styleUrl: './custom-two-way-binding.css'
})
export class CustomTwoWayBinding {

  // size = input.required<{ width: string, height: string }>();
  // sizeChange = output<{ width: string, height: string }>();

  size = model.required<{ width: string, height: string }>();
  onReset() {
    this.size.set({
      width: '200',
      height: '100'
    });
  }
}
