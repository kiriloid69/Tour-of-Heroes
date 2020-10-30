import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
    constructor() {}

    registerForm = new FormGroup({
        username: new FormControl('', Validators.compose([Validators.maxLength(20), Validators.pattern('[a-zA-Z]*'), Validators.required])),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z]*'), Validators.required])),
        repeatPassword: new FormControl('', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z]*'), Validators.required])),
    });

    initializeRegisterForm() {
        this.registerForm.setValue({
            $key: null,
            username: '',
            email: '',
            password: '',
            repeatPassword: ''
        });
    }

    hide = true;

    getErrorMessage() {
        if (this.registerForm.controls.email.hasError('required')) {
            return 'You must enter a value';
        }

        return this.registerForm.controls.email.hasError('email') ? 'Not a valid email' : '';
    }

    onSubmit() {
        console.warn(this.registerForm.invalid);
        if (this.registerForm.invalid) {
           console.warn(this.registerForm.value);  
        }
    }

    

    ngOnInit(): void {}
}
