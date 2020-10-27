import { Component, OnInit } from '@angular/core';
import { USERS } from '../auth/databaseUsers';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  user = USERS;
  
  constructor(private authService: AuthService) { }

  isLogin() {
    return !this.authService.isLogged;
  }

  ngOnInit(): void {
  }

}
