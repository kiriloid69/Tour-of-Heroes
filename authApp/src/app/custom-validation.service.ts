import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CustomValidationService {
    constructor(private http: HttpClient) {}

    validateUsernameNotTaken(control: AbstractControl) {
        return this.checkUsernameNotTaken(control.value).pipe(
            map((res) => {
                return res ? null : { usernameTaken: true };
            })
        );
    }

    checkUsernameNotTaken(username: string): Observable<boolean> {
        return this.http.get('assets/datebase.json').pipe(
            map((usernameList: Array<any>) =>
                usernameList.filter((user) => user.username === username)
            ),
            map((users) => !users.length)
        );
    }
}
