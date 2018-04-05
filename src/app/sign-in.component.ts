import { Component } from '@angular/core';
import { SignInService } from './sign-in.service'

@Component({
  selector: 'app-sign-in',
  template: `
    <form (ngSubmit)="onSubmit(formSignIn)" #formSignIn="ngForm">
        <input placeholder="Email" name="email" #txtEmail="ngModel" ngModel required email />
        <p *ngIf="txtEmail.touched && txtEmail.errors?.required">
          Email is required
        </p>
        <p *ngIf="txtEmail.touched && txtEmail.errors?.email">
          Email is not valid
        </p>
        <br><br>
        <input type="password" #txtPassword="ngModel" placeholder="Password" name="password" ngModel minlength="6"
        pattern="[a-z]*"
        />
      <p *ngIf="txtEmail.touched && txtEmail.errors?.email">
        Email is not valid
      </p>
        <br><br>
        <div ngModelGroup="subjects">
          <label><input type="checkbox" [ngModel]="false" name="NodeJS"/> NodeJS</label>
          <label><input type="checkbox" [ngModel]="false" name="Angular"/> Angular</label>
          <label><input type="checkbox" [ngModel]="false" name="React"/> React</label>
        </div>
        <br>
        <br>
        <button [disabled]="formSignIn.invalid">Submit</button>
    </form>
    <p>
      {{ txtEmail.errors | json }}
    </p>
    <p>
      {{ txtPassword.errors | json }}
    </p>
    <p>
      {{ formSignIn.value | json }}
    </p>
  `,
  providers: [SignInService]
})

export class SignInComponent {
  constructor(private singinService: SignInService) {}

  onSubmit(formSignIn) {
    this.singinService.sendPost(formSignIn.value)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
}
