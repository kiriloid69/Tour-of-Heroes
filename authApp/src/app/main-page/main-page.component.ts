import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { USERS } from '../auth/databaseUsers';
import { AuthService } from '../auth/auth.service';
import { MatSort } from '@angular/material/sort';
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

    ageOption: string;
    departmentOption: string;
    teamleadOption: string;
    searchValue: string;

    ageParam = [
        { name: 'all', value: 1 },
        { name: 'up to 30 years', value: 2 },
        { name: 'over 30 years', value: 3 },
    ];

    departmentParam = [
        { name: 'all', value: 1 },
        { name: 'all department', value: 2 },
        { name: 'no department', value: 3 },
    ];

    teamleadParam = [
        { name: 'all', value: 1 },
        { name: 'teamlead', value: 2 },
        { name: 'not teamlead', value: 3 },
    ];

    displayedColumns: string[] = [
        'id',
        'username',
        'email',
        'age',
        'department',
        'teamlead',
        'verification',
        'edit',
    ];

    @ViewChild('table') table: MatTable<Element>;

    @ViewChild(MatSort) sort: MatSort;

    ngAfterViewInit() {
        this.userData.sort = this.sort;
    }

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
        const id = this.userData.data.length;
        for (let i = 0; i < this.userData.data.length; i++) {
            if (this.userData.data[i].username == row_obj.username) {
                alert(
                    'Another user has already taken this sername. maybe this is your evil counterpart?'
                );
                break;
                return false;
            } else if (this.userData.data[i].email == row_obj.email) {
                alert(
                    'Another user has already taken this email. Check your email!'
                );
                break;
                return false;
            } else {
                this.userData.data.push({
                    id: id + 1,
                    username: row_obj.username,
                    email: row_obj.email,
                    password: row_obj.password,
                    age: row_obj.age,
                    department: row_obj.department,
                    teamlead: row_obj.teamlead,
                    verification: row_obj.verification,
                });
                this.table.renderRows();
                this.userData.sort = this.sort;
                return true;
            }
        }
    }
    editUser(row_obj) {
        this.userData.data = this.userData.data.filter((value, key) => {
            if (value.id == row_obj.id) {
                value.username = row_obj.username;
                value.email = row_obj.email;
                value.password = row_obj.password;
                value.age = row_obj.age;
                value.department = row_obj.department;
                value.teamlead = row_obj.teamlead;
                value.verification = row_obj.verification;
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
        this.dataFilter();
        this.userData.filter = filterValue.trim().toLowerCase();
    }
    dataFilter() {
        const filterValue = this.searchValue;
        console.log(filterValue)
        this.userData = new MatTableDataSource(USERS);

        this.userData.filter = filterValue;

        if (this.ageOption == '1') {
            const mas = this.userData.data.filter(function (e) {
                return e.age;
            });
            this.userData.data = mas;
        }

        if (this.ageOption == '2') {
            const mas = this.userData.data.filter(function (e) {
                return e.age < 30;
            });
            this.userData.data = mas;
        }

        if (this.ageOption == '3') {
            const mas = this.userData.data.filter(function (e) {
                return e.age >= 30;
            });
            this.userData.data = mas;
        }

        if (this.departmentOption == '1') {
            const mas = this.userData.data.filter(function (e) {
                return e.department !== undefined;
            });
            this.userData.data = mas;
        }

        if (this.departmentOption == '2') {
            const mas = this.userData.data.filter(function (e) {
                return e.department !== '';
            });
            this.userData.data = mas;
        }

        if (this.departmentOption == '3') {
            const mas = this.userData.data.filter(function (e) {
                return e.department == '';
            });
            this.userData.data = mas;
        }

        if (this.teamleadOption == '1') {
            const mas = this.userData.data.filter(function (e) {
                return e.teamlead !== undefined;
            });
            this.userData.data = mas;
        }

        if (this.teamleadOption == '2') {
            const mas = this.userData.data.filter(function (e) {
                return e.teamlead;
            });
            this.userData.data = mas;
        }

        if (this.teamleadOption == '3') {
            const mas = this.userData.data.filter(function (e) {
                return !e.teamlead;
            });
            this.userData.data = mas;
        }
    }

    ngOnInit() { }

}
