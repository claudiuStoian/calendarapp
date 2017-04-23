import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from "app/events/events.component";
import { EVENT_ROUTES } from "app/events/events.routes";


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'events', component: EventsComponent, children: EVENT_ROUTES }
];

export const appRouting = RouterModule.forRoot(APP_ROUTES);