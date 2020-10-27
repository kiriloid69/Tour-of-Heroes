import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { USERS } from './databaseUsers';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    hide = true;
    isLogged = false;

    // onSubmit() {
        
    //     let userObj = Object.values(this.loginForm.value);
    //     let username = userObj[0];
    //     let password = userObj[1];
    //     // console.log(userObj[0]);
    //     // console.log(userObj[1]);

    //     for (let i = 0; i < USERS.length; i++) {
    //         if (USERS[i].username == username) {
    //             if (USERS[i].password == password) {
    //                 alert('you login!');
    //                 this.isLogged = true;
    //                 break;
    //             } else {
    //                 alert('false password');
    //             }
    //         } else {
    //             alert('false name');
    //         }
    //     }
    // }
    constructor() {}
}
