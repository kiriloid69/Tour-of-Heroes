import { Component, OnInit } from '@angular/core';
import { USERS } from '../auth/databaseUsers';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  user = USERS;
  constructor() { }

  ngOnInit(): void {
  }

}
