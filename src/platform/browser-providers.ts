/*
 * These are globally available services in any component or any other service
 */

// Angular 2
import { APP_BASE_HREF } from '@angular/common';
// Angular 2 Http
import { HTTP_PROVIDERS } from '@angular/http';
// Angular 2 Router
import { provideRouter } from '@angular/router';
// Angular 2 forms
import { disableDeprecatedForms, provideForms } from '@angular/forms';

// Angular 2 Material
// TODO: replace with @angular2-material/all
import { MATERIAL_PROVIDERS } from './browser/angular2-material2';

// Angular Webpack Packages
import { provideWebpack } from '@angularclass/webpack-toolkit';
import { providePrefetchIdleCallbacks } from '@angularclass/request-idle-callback';


import { routes, asyncRoutes, prefetchRouteCallbacks } from '../app/app.routes';
import { APP_RESOLVER_PROVIDERS } from '../app/app.resolver';
/*
* Application Providers/Directives/Pipes
* providers/directives/pipes that only live in our browser environment
*/
export const APPLICATION_PROVIDERS = [
  // new Angular 2 forms
  disableDeprecatedForms(),
  provideForms(),

  ...APP_RESOLVER_PROVIDERS,

  provideRouter(routes),
  provideWebpack(asyncRoutes),
  providePrefetchIdleCallbacks(prefetchRouteCallbacks),

  ...HTTP_PROVIDERS,
  ...MATERIAL_PROVIDERS,

  { provide: APP_BASE_HREF, useValue: '/' }
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
