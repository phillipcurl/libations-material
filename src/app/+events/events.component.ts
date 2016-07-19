import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'detail',
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  template: `
    <router-outlet></router-outlet>
  `
})
export class Events {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Events` component');
  }

}