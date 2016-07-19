import { Manage } from './manage.component';
import { ManageUsers } from './manage-users.component';

// async components must be named routes for WebpackAsyncRoute
export const routes = {
  path: 'manage', component: Manage,
  children: [
    { path: '', component: ManageUsers },
    { path: 'users', component: ManageUsers }
  ]
};
