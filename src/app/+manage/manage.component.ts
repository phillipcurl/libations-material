import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'detail',
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  template: `
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header mdl-layout__header--scroll mdl-color--primary danger">
        <div class="mdl-layout--large-screen-only mdl-layout__header-row">
        </div>
        <div class="mdl-layout--large-screen-only mdl-layout__header-row">
          <h3>Libations Administration Portal</h3>
        </div>
        <div class="mdl-layout--large-screen-only mdl-layout__header-row">
        </div>
        <div class="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
          <a [routerLink]="['./brands']" class="mdl-layout__tab is-active">Brands</a>
          <a [routerLink]="['./campaigns']" class="mdl-layout__tab is-active">Campaigns</a>
          <a [routerLink]="['./clients']" class="mdl-layout__tab is-active">Clients</a>
          <a [routerLink]="['./events']" class="mdl-layout__tab is-active">Events</a>
          <a [routerLink]="['./locations']" class="mdl-layout__tab is-active">Locations</a>
          <a [routerLink]="['./time']" class="mdl-layout__tab is-active">Time Entries</a>
          <a [routerLink]="['./users']" class="mdl-layout__tab is-active">Users</a>
        </div>
      </header>
  </div>
  <router-outlet></router-outlet>
  `
})
export class Manage {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Manage` component');
  }

}
