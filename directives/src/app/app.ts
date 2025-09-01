import { Component, computed, inject, signal } from '@angular/core';
import { Auth } from "./auth/auth";
import { LearningResources } from "./learning-resources/learning-resources";
import { AuthService } from './auth/auth.service';
import { NgIf } from '@angular/common';
import { AuthDirective } from './auth/auth.directive';

@Component({
  selector: 'app-root',
  imports: [Auth, LearningResources, AuthDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('directives');

  authService = inject(AuthService);
  isAdmin = computed(() => this.authService.activePermission() === 'admin');

}
