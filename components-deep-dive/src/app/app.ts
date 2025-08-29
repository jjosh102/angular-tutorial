import { Component } from '@angular/core';
import { Header } from './header/header';
import { ServerStatus } from "./dashboard/server-status/server-status";
import { Traffic } from "./dashboard/traffic/traffic";
import { DashboardItem } from "./dashboard/dashboard-item/dashboard-item";
import { Tickets } from "./dashboard/tickets/tickets";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [Header, ServerStatus, Traffic, DashboardItem, Tickets],
})
export class App {


}
