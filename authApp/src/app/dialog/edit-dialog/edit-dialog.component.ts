import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  constructor() { }


  createForm = new FormGroup({
    username: new FormControl(
        '',
        Validators.compose([
            Validators.maxLength(20),
            Validators.pattern('[a-zA-Z_0-9]*'),
            Validators.required,
        ])
    ),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(
        '',
        Validators.compose([
            Validators.maxLength(50),
            Validators.pattern('[a-zA-Z_0-9]*'),
            Validators.required,
        ])
    ),
});

getErrorMessage() {
    if (this.createForm.controls.email.hasError('required')) {
        return 'You must enter a value';
    }

    return this.createForm.controls.email.hasError('email')
        ? 'Not a valid email'
        : '';
}


onSubmit() {
    if (this.createForm.valid) {
        console.warn(this.createForm.value)
    }
}

  ngOnInit(): void {
  }

}
