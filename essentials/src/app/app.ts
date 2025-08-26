import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { DUMMY_USERS } from './dummy-users';
import { UserModel } from './user/user.model';

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
