import { Component } from '@angular/core';

@Component({
  selector: 'index',
  styles: [`
    :host md-card{
      margin: 25px;
    }
  `],
  template: `
    <md-card>Hello from Manage Events</md-card>
  `
})
export class ManageEvents {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Manage Events` component');
  }
}
