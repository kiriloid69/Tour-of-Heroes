import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    age: number;
    department: string;
    teamlead: boolean;
    verification: boolean;
}

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
    action: string;
    local_data: any;

    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: User
    ) {
        console.log(data);
        this.local_data = { ...data };
        this.action = this.local_data.action;
    }

    doAction() {
        this.dialogRef.close({ event: this.action, data: this.local_data });
    }

    closeDialog() {
        this.dialogRef.close({ event: 'Cancel' });
    }

    ngOnInit(): void {}
}
