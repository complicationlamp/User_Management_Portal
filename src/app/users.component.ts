import { Component } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'my-users',
  template: `
  <h2> User Details</h2>
  <table style="width:100%" class="users">
    <tr>
      <th>User</th>
      <th>User id</th> 
      <th>XXXXX</th>
    </tr>
    <tr *ngFor="let user of users" 
    [class.selected]="user === selectedUser"
    (click)="onSelect(user)">
      <td>{{user.name}}
      <td >{{user.id}}</td> 
      <td>yyy</td>
    </tr>
  </table>
  <user-detail [user]="selectedUser"></user-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: purple;
    }
    .userss {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .users td {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .users td.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .users td:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .users .text {
      position: relative;
      top: -3px;
    }
  `],
  providers: [UserService]
})

export class UsersComponent { 
  title = "User Management Portal";
  users:User[];
  selectedUser: User;

  constructor(private userService:
    UserService){ }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users)
  }
  ngOnInit(): void {
    this.getUsers();
  }

    onSelect(user: User): void {
    this.selectedUser = user;
  }
}
