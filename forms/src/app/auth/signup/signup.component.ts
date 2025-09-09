import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';


function equalValue(constrolName1: string, constrolName2: string) {

  return (control: AbstractControl) => {
    const val1 = control.get(constrolName1)?.value;
    const val2 = control.get(constrolName2)?.value;

    if (val1 === val2) {
      return null;
    }

    return {
      valueNotEqual: true
    }
  }
}

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required]
    }),
    passwordGroup: new FormGroup({
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)]
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)]
      })
    }, {
      validators: [equalValue('password', 'confirmPassword')]
    }),

    firstName: new FormControl('', { validators: [Validators.required] }),
    lastName: new FormControl('', { validators: [Validators.required] }),

    addressGroup: new FormGroup({
      street: new FormControl('', { validators: [Validators.required] }),
      number: new FormControl('', { validators: [Validators.required] }),
      postalCode: new FormControl('', { validators: [Validators.required] }),
      city: new FormControl('', { validators: [Validators.required] }),

    }),

    role: new FormControl<'student' | 'teacher' | 'employee' | 'founder' | 'other'>('student', { validators: [Validators.required] }),

    sourceGroup: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ]),
    agree: new FormControl(false, { validators: [Validators.required] }),
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

  get passwordIsInvalid() {
    const passwordControl = this.form.controls.passwordGroup.controls.password;
    return passwordControl.dirty && passwordControl.touched && passwordControl.invalid;
  }

  onSubmit() {
    const email = this.form.value.email;
    const password = this.form.controls.passwordGroup.controls.password;

    if (this.form.invalid) {
      return;
    }
  }

  onReset() {
    this.form.reset();
  }

}
