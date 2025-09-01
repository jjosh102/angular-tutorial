import { Component, inject, signal } from '@angular/core';
import { Permission } from './auth.model';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth {
  email = signal<string>('');
  password = signal<string>('');
  private authService = inject(AuthService);
  onSubmit() {
    this.authService.authenticate(this.email(), this.password())
  }

}
