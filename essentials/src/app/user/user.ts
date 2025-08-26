import { Component, computed, input, output } from '@angular/core';
import { UserModel } from './user.model';

// import { DUMMY_USERS } from '../dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})



export class User {
  user = input.required<UserModel>();
  isSelected = input.required<boolean>();
  select = output<UserModel>();
  imagePath = computed(() => `../assets/users/${this.user().avatar}`);

  onSelectUser(): void {
    this.select.emit(this.user());
  }
}



// export class User {
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
//   imagePath =  computed(() => `../assets/users/${this.selectedUser().avatar}`);

//   onSelectUser(): void {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//   }


// }
// export class User {
//   @Input({ required: true }) avatar!: string;
//   @Input({ required: true }) name!: string;


//   get imagePath(): string {
//     return `../assets/users/${this.avatar}`;
//   }

//   onSelectUser(): void {

//   }
// }
