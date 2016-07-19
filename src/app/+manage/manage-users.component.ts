import { Component } from '@angular/core';

@Component({
  selector: 'index',
  styles: [`
    :host md-card{
      margin: 25px;
    }
  `],
  template: `
    <md-card>Hello from Manage Users</md-card>
  `
})
export class ManageUsers {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Manage Users` component');
  }
}
