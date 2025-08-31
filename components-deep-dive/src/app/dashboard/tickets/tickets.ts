import { Component, signal } from '@angular/core';
import { NewTicket } from "./new-ticket/new-ticket";
import { TicketData } from './ticket/ticket.model';
import { v4 as uuidv4 } from 'uuid';
import { Ticket } from "./ticket/ticket";
@Component({
  selector: 'app-tickets',
  imports: [NewTicket, Ticket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
  standalone: true,
})
export class Tickets {

  tickets = signal<TicketData[]>([]);
  onAdd(ticketData: { title: string, description: string }) {
    const ticket: TicketData = {
      id: uuidv4(),
      title: ticketData.title,
      request: ticketData.description,
      status: 'open'
    };
    this.tickets.update(tickets => [...tickets, ticket]);
  }

  onClose(id: string) {
    this.tickets.update(tickets =>
      tickets.map(ticket =>
        ticket.id === id ? { ...ticket, status: 'closed' } : ticket
      )
    );
  }
}


