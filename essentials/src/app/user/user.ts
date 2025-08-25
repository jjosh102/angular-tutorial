import { Component, computed, input, Input, output } from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})


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

export class User {
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();

  select = output<string>();
  imagePath = computed(() => `../assets/users/${this.avatar()}`);

  onSelectUser(): void {
    this.select.emit(this.id());
  }
}
