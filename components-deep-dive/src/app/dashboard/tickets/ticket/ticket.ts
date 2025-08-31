import { Component, input, output, signal } from '@angular/core';
import { TicketData } from './ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css'
})
export class Ticket {
  data = input.required<TicketData, TicketData>({
    transform: (value) => {
      return { ...value, title: value.title.toUpperCase() };
    }
  });

  isDetialsVisible = signal<boolean>(false);
  close = output();

  onToggle() {
    this.isDetialsVisible.update((wasVisible) => !wasVisible);
  }
  onMarkCompleted() {
    this.close.emit();
  }
}
