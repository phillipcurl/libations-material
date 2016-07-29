/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

import { BrandService, CampaignService, ClientService, EventService, LocationService, TimeService, UserService } from './shared/services';


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
        <md-nav-list (click)="sidenav.close()">
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
        <a router-active [routerLink]=" ['./'] ">
          <span>{{ name }}</span>
        </a>
        <a router-active [routerLink]=" ['./events'] " class="mdl-layout__tab">Events</a>
        <a router-active [routerLink]=" ['./about'] " class="mdl-layout__tab">About</a>
        <a router-active [routerLink]=" ['./detail'] " class="mdl-layout__tab">Detail</a>
        <a router-active [routerLink]=" ['./manage'] " class="mdl-layout__tab">Manage</a>
        <div class="mdl-layout-spacer"></div>
        <button class="mdl-button mdl-js-button mdl-button--icon">
          <i class="material-icons">person</i>
        </button>
        <button md-icon-button (click)="sidenav.open()">
          <md-icon>menu</md-icon>
        </button>
         <!-- <button md-fab (click)="formShowing=!formShowing">
          <md-icon>add</md-icon>
        </button> -->
      </md-toolbar>
      <md-progress-bar *ngIf="appState.state.isLoading" mode="indeterminate" color="primary"></md-progress-bar>
      <md-content>

        <router-outlet></router-outlet>

        <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

        <footer class="mdl-mini-footer">
          <div class="mdl-mini-footer__left-section">
            <div class="mdl-logo">Title</div>
            <ul class="mdl-mini-footer__link-list">
              <li><a href="#">Help</a></li>
              <li><a href="#">Privacy & Terms</a></li>
            </ul>
          </div>
        </footer>

      </md-content>
    </md-sidenav-layout>
  `,
  providers: [ BrandService, CampaignService, ClientService, EventService, LocationService, TimeService, UserService ]
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
