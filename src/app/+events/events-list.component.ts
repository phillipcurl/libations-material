import { Component } from '@angular/core';

@Component({
  selector: 'index',
  styles: [`
    :host md-card{
      margin: 25px;
    }
  `],
  template: `
    <md-card>Hello from Events Index</md-card>
  `
})
export class EventsList {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Events Index` component');
  }
}
