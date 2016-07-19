/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
    <md-sidenav-layout fullscreen>
      <md-sidenav #sidenav>
        <md-nav-list>
          <a md-list-item router-active [routerLink]=" ['./'] ">
            <md-icon md-list-icon>home</md-icon>
            <span md-line>Home</span>
            <span md-line class="secondary">A brief description of the view</span>
          </a>
          <a md-list-item router-active [routerLink]=" ['./about'] ">
            <!-- <md-icon md-list-icon>{{view.icon}}</md-icon> -->
            <span md-line>About</span>
            <span md-line class="secondary">A brief description of the view</span>
          </a>
          <a md-list-item router-active [routerLink]=" ['./events'] ">
            <md-icon md-list-icon>motorcycle</md-icon>
            <span md-line>Events</span>
            <span md-line class="secondary">A brief description of the view</span>
          </a>
          <a md-list-item router-active [routerLink]=" ['./manage'] ">
            <md-icon md-list-icon>motorcycle</md-icon>
            <span md-line>Manage</span>
            <span md-line class="secondary">A brief description of the view</span>
          </a>
          <a md-list-item router-active [routerLink]=" ['./detail'] ">
            <md-icon md-list-icon>motorcycle</md-icon>
            <span md-line>Detail</span>
            <span md-line class="secondary">A brief description of the view</span>
          </a>
        </md-nav-list>
      </md-sidenav>
      <md-toolbar color="primary">
        <button md-icon-button (click)="sidenav.open()">
          <md-icon>menu</md-icon>
        </button>
        <span>{{ name }}</span>
        <!-- <button md-fab (click)="formShowing=!formShowing">
          <md-icon>add</md-icon>
        </button> -->
      </md-toolbar>
      <md-progress-bar *ngIf="appState.state.isLoading" mode="indeterminate" color="primary"></md-progress-bar>
      <md-content>

        <router-outlet></router-outlet>

        <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

      </md-content>
    </md-sidenav-layout>
  `
})
export class App {
  libationsLogo = 'assets/img/libations-logo.png';
  loading = false;
  name = 'Libations Portal';
  url = 'https://soundcloud.com/philcurl/likes';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    this.appState.set('isLoading', false);
    console.log('Initial App State', this.appState.state);
  }

}
