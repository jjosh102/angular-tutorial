import { Component, signal } from '@angular/core';
import { Auth } from "./auth/auth";
import { LearningResources } from "./learning-resources/learning-resources";

@Component({
  selector: 'app-root',
  imports: [ Auth, LearningResources],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('directives');
}
