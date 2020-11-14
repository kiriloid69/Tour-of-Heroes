import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { USERS } from '../auth/databaseUsers';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) {}

    forgotPasswordForm = new FormGroup({
        email: new FormControl(
            '',
            Validators.compose([
                Validators.maxLength(20),
                Validators.pattern('[a-zA-Z_0-9_.]*'),
                Validators.required,
            ])
        ),
    });

    getErrorMessage() {
      if (this.forgotPasswordForm.controls.email.hasError('required')) {
          return 'You must enter a value';
      }

      return this.forgotPasswordForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

    initializeLoginForm() {
        this.forgotPasswordForm.setValue({
            $key: null,
            email: '',
        });
    }

    hide = true;

    onSubmit() {
        let userObj = Object.values(this.forgotPasswordForm.value);
        let email = userObj[0];
        console.log(userObj[1]);

        for (let i = 0; i < USERS.length; i++) {
            if (USERS[i].email == email) {
                this.authService.isLogged = true;
                this.router.navigateByUrl('/');
                this.authService.i = i;
                break;
            }
        }
    }

    ngOnInit(): void {}
}
