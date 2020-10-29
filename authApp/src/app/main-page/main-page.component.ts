import { Component, Inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { USERS } from '../auth/databaseUsers';
import { AuthService } from '../auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../dialog/edit-dialog/edit-dialog.component';
import { CreateDialogComponent } from '../dialog/create-dialog/create-dialog.component';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
    constructor(private authService: AuthService, public dialog: MatDialog) {}

    displayedColumns: string[] = [
        'id',
        'username',
        'email',
        'password',
        'verify',
        'edit',
    ];
    userData = new MatTableDataSource(USERS);
    user = USERS;

    getUser() {
        
    }

    isLogin() {
        return !this.authService.isLogged;
    }

    onEdit() {
        this.dialog.open(EditDialogComponent);
        console.log(this.getUser())
    }

    onCreate() {
        this.dialog.open(CreateDialogComponent);
    }

    onDelete() {
        // const id = typeof this.user === 'number' ? this.user : this.user;
        // console.log(id)
    }

    // deleteUser(user: User): void {
    //     this.user = this.user.filter((h) => h !== user);
    //     this.heroService.deleteHero(hero).subscribe();
    // }

    // addUser(name: string): void {
    //     name = name.trim();
    //     if (!name) {
    //         return;
    //     }
    //     this.heroService.addHero({ username } as User).subscribe((hero) => {
    //         this.heroes.push(hero);
    //     });
    // }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.userData.filter = filterValue.trim().toLowerCase();
    }

    ngOnInit(): void {
    }
}
