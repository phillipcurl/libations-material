import { Component } from '@angular/core';

@Component({
  selector: 'index',
  styles: [`
    :host md-card{
      margin: 25px;
    }
  `],
  template: `
    <md-card>Hello from Manage Time</md-card>
  `
})
export class ManageTime {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Manage Time` component');
  }
}
