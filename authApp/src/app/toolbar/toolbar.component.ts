import { Component, OnInit } from '@angular/core';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {


  constructor(private authService: AuthService) { }

  isLogin() {
    return !this.authService.isLogged;
  }

  ngOnInit(): void {
  }

}
