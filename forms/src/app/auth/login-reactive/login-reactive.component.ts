import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, of } from 'rxjs';

function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) {
    return null;
  }

  return {
    doesNotContainQuestionMark: true
  }

  function emialIsUnique(control: AbstractControl) {
    if (!control.value.includes('test')) {
      return of(null);
    }

    return of({
      notUnique: true
    })
  }

}
@Component({
  selector: 'app-login-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './login-reactive.component.html',
  styleUrl: './login-reactive.component.css'
})
export class LoginReactiveComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark]
    }),
  });

  ngOnInit() {

    const savedForm = window.localStorage.getItem('saved-login-form');
    if (savedForm) {
      this.form.patchValue({
        email: JSON.parse(savedForm).email
      })
    }

    const subscription = this.form.valueChanges.pipe(
      debounceTime(500)
    ).subscribe({
      next: (value) => {
        window.localStorage.setItem(
          'saved-login-form',
          JSON.stringify({ email: value.email })
        );
      },
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  get emailIsInvalid() {
    return this.form.controls.email.dirty &&
      this.form.controls.email.touched &&
      this.form.controls.email.invalid
  }


  get paswordIsInvalid() {
    return this.form.controls.password.dirty &&
      this.form.controls.password.touched &&
      this.form.controls.password.invalid
  }

  onSubmit() {
    const email = this.form.value.email;
    const password = this.form.value.password;
    console.log(this.form);
  }

}


