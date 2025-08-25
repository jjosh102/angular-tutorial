import { Component, input } from '@angular/core';
import { UserModel } from '../user/user';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  user = input<UserModel | undefined>(undefined);
}
