import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
  standalone: true,
})
export class ServerStatus implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  //  private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(this.currentStatus());

    });
  }
  ngOnInit() {
    const interval = setInterval(() => {
      const statuses: Array<'online' | 'offline' | 'unknown'> = ['online', 'offline', 'unknown'];
      const randomIndex = Math.floor(Math.random() * statuses.length);
      this.currentStatus.set(statuses[randomIndex]);
    }, 5000);

    this.destroyRef.onDestroy(() => clearInterval(interval));
  }

  // ngOnDestroy() {
  //   clearInterval(this.interval);
  // }
}
