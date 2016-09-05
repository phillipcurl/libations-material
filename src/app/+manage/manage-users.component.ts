import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { User, UserService, LoaderComponent, AlertComponent, GridComponent, Column } from './../shared';

@Component({
  selector: 'index',
  styles: [`
    :host md-card{
      margin: 25px;
    }
  `],
  template: `
    <md-card>Hello from Manage Users</md-card>
  `,
  directives: [ROUTER_DIRECTIVES, LoaderComponent, AlertComponent, GridComponent],

})
export class ManageUsers {

  users: Array<User>;
  editedUsers: Array<User>;
  columns: Array<Column>;
  isLoading: boolean;
  errorMessage: string;

  constructor(public UserService: UserService) {}

  ngOnInit() {
    this.isLoading = true;
    this.UserService.getUsers().subscribe(
      users=> {
        this.users = users;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.errorMessage = <any>error
      }
    );
    this.columns = this.getColumns();
    console.log('hello `Manage Users` component');
  }

  getColumns(): Array<Column> {
    return [
      new Column('firstName','First Name'),
      new Column('lastName','Last Name'),
      new Column('email','Email Address'),
      new Column('phoneNumber', 'Phone Number')
    ];
  }

  saveObject(user){
    this.UserService.updateUser(user).subscribe(
      user => {
        this.editedUsers.push(user);
      },
      error => {
        this.errorMessage = <any>error
      }
    );
  }

}
