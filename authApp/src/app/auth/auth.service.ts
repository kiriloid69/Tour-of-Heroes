import { Injectable } from '@angular/core';
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
