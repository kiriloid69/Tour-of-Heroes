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

    displayedColumns: string[] = [
        'id',
        'username',
        'email',
        'age',
        'department',
        'teamlead',
        'verification',
        'edit',
        //age { < 30 }
        //department { all, all depart, no depart }
        //teamlead(bool) { teamlead , not teamlead} 
        //sort ++
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
        const id = this.userData.data.length;
        this.userData.data.push({
            id: id + 1,
            username: row_obj.username,
            email: row_obj.email,
            password: row_obj.password,
            age: row_obj.age,
            department: row_obj.department,
            teamlead: row_obj.department,
            verification: row_obj.verification,
        });
        console.log(row_obj);
        this.table.renderRows();
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

    @ViewChild(MatSort) sort: MatSort;

    ngAfterViewInit() {
        this.userData.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.userData.filter = filterValue.trim().toLowerCase();
    }

    // selectedOption: string;
    // printedOption: string;

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
        { name: 'teamLead', value: 2 },
        { name: 'not teamlead', value: 3 },
    ];

    ageFilter() {
        console.log(this.ageParam);
        console.log(1);
        // if (this.selected == '1') {
        //     this.age = 'yes';
        // } else if (this.selected == '2') {
        //     this.age = 'yess';
        //     // if (age < 30) {
        //     // this.userData.filter = age.trim().toLowerCase();
        //     // }
        // } else if (this.selected == '3') {
        //     this.age = 'yess';
        //     // this.userData.filter = age.trim().toLowerCase();
        // }
    }

    ngOnInit(): void {}
}
