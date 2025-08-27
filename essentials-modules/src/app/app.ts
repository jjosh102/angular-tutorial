import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { UserModel } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: false,
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
