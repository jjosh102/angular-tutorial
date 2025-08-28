import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
  standalone  : true,
})
export class ServerStatus {
  currentStatus = signal('online');
}
