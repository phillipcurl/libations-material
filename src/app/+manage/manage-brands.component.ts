import { Component } from '@angular/core';

@Component({
  selector: 'index',
  styles: [`
    :host md-card{
      margin: 25px;
    }
  `],
  template: `
    <md-card>Hello from Manage Brands</md-card>
  `
})
export class ManageBrands {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Manage Brands` component');
  }
}
