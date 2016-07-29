// App
export * from './app.component';
export * from './app.service';
export * from './app.routes';

import { AppState } from './app.service';
import { ResponseHandlerService, BrandService, CampaignService, ClientService, EventService, LocationService, TimeService, UserService } from './shared';

// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  ResponseHandlerService,
  BrandService,
  CampaignService,
  ClientService,
  EventService,
  LocationService,
  TimeService,
  UserService
];
