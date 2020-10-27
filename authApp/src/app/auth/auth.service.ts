import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { USERS } from './databaseUsers';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    hide = true;
    isLogged = false;
    i = 0;

    constructor() {}
}
