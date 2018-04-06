import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-sign-up',
  template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="formSignUp">
        <input placeholder="Email" formControlName="email" />
        <p *ngIf="formSignUp.get('email').invalid && formSignUp.get('email').touched">Email is required</p>
        <br><br>
        <input type="password" formControlName="password" />
        <br><br>
        <div formGroupName="subject">
          <label><input type="checkbox" name="NodeJS" formControlName="nodeJS" /> NodeJS</label>
          <label><input type="checkbox" name="Angular" formControlName="angular" /> Angular</label>
          <label><input type="checkbox" name="React" formControlName="reactJS"/> React</label>
        </div>
        <br><br>
        <button [disabled]="formSignUp.invalid">Submit</button>
    </form>
    <code>{{ formSignUp.controls.email.errors | json }}</code>
  `
})

export class SignUpComponent implements OnInit{
  formSignUp: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formSignUp = this.fb.group({
      subject: this.fb.group({
        nodeJS: false,
        angular: true,
        reactJS: false
      }),
      email: ['', [Validators.email, gmailValidator]],
      password: '',
    })
  }

  onSubmit() {
    console.log(this.formSignUp.value);
  }
}

function gmailValidator(formControl: FormControl) {
  if (formControl.value.includes('@gmail.com')) {
    return null;
  }

  return { gmail: true };
}
