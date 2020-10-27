import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { USERS } from '../auth/databaseUsers';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  displayedColumns: string[] = ['id', 'username', 'email', 'password', 'verify'];
  user = USERS;
  constructor(private authService: AuthService) { }
  dataSource = new MatTableDataSource(USERS);

  isLogin() {
    return !this.authService.isLogged;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }

}
