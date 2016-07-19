import { Component } from '@angular/core';

@Component({
  selector: 'index',
  styles: [`
    :host md-card{
      margin: 25px;
    }
  `],
  template: `
    <md-card>Hello from Manage Clients</md-card>
  `
})
export class ManageClients {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Manage Clients` component');
  }
}
