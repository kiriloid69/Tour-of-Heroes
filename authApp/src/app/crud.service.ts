import { Injectable } from '@angular/core';
import { USERS } from './auth/databaseUsers';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  user = USERS;

  constructor() { }

}
