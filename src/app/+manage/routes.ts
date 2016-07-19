import { Manage } from './manage.component';
import { ManageBrands } from './manage-brands.component';
import { ManageCampaigns } from './manage-campaigns.component';
import { ManageClients } from './manage-clients.component';
import { ManageEvents } from './manage-events.component';
import { ManageLocations } from './manage-locations.component';
import { ManageTime } from './manage-time.component';
import { ManageUsers } from './manage-users.component';



// async components must be named routes for WebpackAsyncRoute
export const routes = {
  path: 'manage', component: Manage,
  children: [
    { path: '', component: ManageUsers },
    { path: 'brands', component: ManageBrands },
    { path: 'campaigns', component: ManageCampaigns},
    { path: 'clients', component: ManageClients },
    { path: 'events', component: ManageEvents},
    { path: 'locations', component: ManageLocations },
    { path: 'time', component: ManageTime},
    { path: 'users', component: ManageUsers }
  ]
};
