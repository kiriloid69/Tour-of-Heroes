import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { USERS } from '../auth/databaseUsers';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router) {}

    loginForm = new FormGroup({
        username: new FormControl(
            '',
            Validators.compose([
                Validators.maxLength(20),
                Validators.pattern('[a-zA-Z_0-9_.]*'),
                Validators.required,
            ])
        ),
        password: new FormControl(
            '',
            Validators.compose([
                Validators.maxLength(50),
                Validators.pattern('[a-zA-Z_0-9_.]*'),
                Validators.required,
            ])
        ),
    });

    hide = true;

    onSubmit() {
        let userObj = Object.values(this.loginForm.value);
        let username = userObj[0];
        let password = userObj[1];
        console.log(userObj[0]);
        console.log(userObj[1]);

        for (let i = 0; i < USERS.length; i++) {
            if (USERS[i].username == username) {
                if (USERS[i].password == password) {
                    alert('you login!');
                    this.authService.isLogged = true;
                    this.router.navigateByUrl('/');
                    this.authService.i = i;
                    break;
                } else {
                    alert('false password')
                }
            } else {
                alert('false name');
            }
        }
    }

    ngOnInit(): void {}
}
