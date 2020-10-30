import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { USERS } from '../auth/databaseUsers';
import { AuthService } from '../auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
    constructor(private authService: AuthService, public dialog: MatDialog) {}

    @ViewChild(MatTable, { static: true }) table: MatTable<any>;

    userData = new MatTableDataSource(USERS);
    user = USERS;

    displayedColumns: string[] = [
        'id',
        'username',
        'email',
        'password',
        'verify',
        'edit',
    ];

    isLogin() {
        return !this.authService.isLogged;
    }

    openDialog(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(DialogComponent, {
            width: '500px',
            data: obj,
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result.event == 'Add') {
                this. createUser(result.data);
            } else if (result.event == 'Create') {
                this.editUser(result.data);
            } else if (result.event == 'Delete') {
                this.deleteUser(result.data);
            }
        });
    }

     createUser(row_obj) {
        this.user.push({
            id: this.user.length + 1,
            username: row_obj.username,
            email: row_obj.email,
            password: row_obj.password,
            verification: false,
        });
        this.table.renderRows();
        console.log(this.user.length + 1)
    }
    editUser(row_obj) {
        this.user = this.user.filter((value, key) => {
            if (value.id == row_obj.id) {
                value.username = row_obj.name;
            }
            return true;
        });
    }
    deleteUser(row_obj) {
        this.user = this.user.filter((value, key) => {
            return value.id != row_obj.id;
        });
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.userData.filter = filterValue.trim().toLowerCase();
    }

    ngOnInit(): void {}
}
