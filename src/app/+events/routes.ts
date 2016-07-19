import { Events } from './events.component';
import { EventsList } from './events-list.component';

// async components must be named routes for WebpackAsyncRoute
export const routes = {
  path: 'events', component: Events,
  children: [
    { path: '', component: EventsList }
  ]
};
