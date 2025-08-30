import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { ServerStatus } from "./dashboard/server-status/server-status";
import { Traffic } from "./dashboard/traffic/traffic";
import { DashboardItem } from "./dashboard/dashboard-item/dashboard-item";
import { Tickets } from "./dashboard/tickets/tickets";
import { Lifecycle } from "./lifecycle/lifecycle";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [Header, ServerStatus, Traffic, DashboardItem, Tickets, Lifecycle],
})
export class App {

  lifecycleComponentIsVisible = signal(false);
  lifecycleInputText = signal('Some Random Number: ' + Math.random() * 100);

  onToggleLifecycleComponentVisibility() {
    this.lifecycleComponentIsVisible.set(!this.lifecycleComponentIsVisible());
  }

  onChangeLifecycleInputText() {
    this.lifecycleInputText.set('Some Random Number: ' + Math.random() * 100);
  }
}
