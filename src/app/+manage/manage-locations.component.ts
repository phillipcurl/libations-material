import { Component } from '@angular/core';

@Component({
  selector: 'index',
  styles: [`
    :host md-card{
      margin: 25px;
    }
  `],
  template: `
    <md-card>Hello from Manage Locations</md-card>
  `
})
export class ManageLocations {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Manage Locations` component');
  }
}
