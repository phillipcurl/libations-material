import { Component } from '@angular/core';

@Component({
  selector: 'index',
  styles: [`
    :host md-card{
      margin: 25px;
    }
  `],
  template: `
    <md-card>Hello from Manage Campaigns</md-card>
  `
})
export class ManageCampaigns {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Manage Campaigns` component');
  }
}
