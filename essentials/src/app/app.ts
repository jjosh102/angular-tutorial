import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';


import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('essentials');
  users = DUMMY_USERS;
  selectedUser = signal('');

  onUserSelected(userId: string): void {
    this.selectedUser.set(DUMMY_USERS.find(user => user.id === userId)?.name || 'No name selected');
  }
}
