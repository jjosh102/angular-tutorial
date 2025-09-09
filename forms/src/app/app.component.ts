import { Component } from '@angular/core';

import { LoginComponent } from './auth/login/login.component';
import { LoginReactiveComponent } from "./auth/login-reactive/login-reactive.component";
import { SignupComponent } from "./auth/signup/signup.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [LoginReactiveComponent, SignupComponent]
})
export class AppComponent {}
