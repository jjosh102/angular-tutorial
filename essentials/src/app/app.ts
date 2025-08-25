import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User, UserModel } from './user/user';
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
  selectedUser? = signal<UserModel | undefined>(undefined);

  onUserSelected(user: UserModel): void {
    this.selectedUser?.set(user);
  }
}
