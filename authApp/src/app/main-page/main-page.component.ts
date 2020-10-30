import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
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

    userData = new MatTableDataSource(USERS);

    displayedColumns: string[] = [
        'id',
        'username',
        'email',
        'password',
        'verify',
        'edit',
    ];

    @ViewChild('table') table: MatTable<Element>;

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
            if (result.event == 'Create') {
                this.createUser(result.data);
            } else if (result.event == 'Edit') {
                this.editUser(result.data);
            } else if (result.event == 'Delete') {
                this.deleteUser(result.data);
            }
        });
    }

    createUser(row_obj) {
        let id = this.userData.data.length;
        this.userData.data.push({
            id: id + 1,
            username: row_obj.username,
            email: row_obj.email,
            password: row_obj.password,
            verification: false,
        });
        this.table.renderRows();
    }
    editUser(row_obj) {
        this.userData.data = this.userData.data.filter((value, key) => {
            if (value.id == row_obj.id) {
                value.username = row_obj.username;
                value.email = row_obj.email;
                value.password = row_obj.password;
            }
            return true;
        });
    }
    deleteUser(row_obj) {
        this.userData.data = this.userData.data.filter((value, key) => {
            return value.id != row_obj.id;
        });
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.userData.filter = filterValue.trim().toLowerCase();
    }

    ngOnInit(): void {}
}
