import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-restore-password',
    templateUrl: './restore-password.component.html',
    styleUrls: ['./restore-password.component.css'],
})
export class RestorePasswordComponent implements OnInit {
    constructor() {}

    restorePasswordForm = new FormGroup({
        currentPassword: new FormControl('', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z]*'), Validators.required])),
        newPassword: new FormControl('', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z]*'), Validators.required])),
        repeatNewPassword: new FormControl('', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z]*'), Validators.required])),
    });

    onSubmit() {
        if (this.restorePasswordForm.valid) {
            console.warn(this.restorePasswordForm.value);
        } else {
            console.log(this.restorePasswordForm.valid)   
        }
    }

    hide = true;

    ngOnInit(): void {}
}
