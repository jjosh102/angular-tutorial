import { Component, computed, input, Input, output } from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

export interface UserModel {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})



export class User {
  user = input.required<UserModel>();

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
