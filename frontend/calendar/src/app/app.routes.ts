import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from "app/events/events.component";
import { EVENT_ROUTES } from "app/events/events.routes";
import { LoginComponent } from "app/login/login.component";
import { ContactComponent } from "app/contact/contact.component";
import { CONTACT_ROUTES } from "app/contact/contact.routes";


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'events', component: EventsComponent, children: EVENT_ROUTES },
    { path: 'contact', component: ContactComponent, children: CONTACT_ROUTES }
];

export const appRouting = RouterModule.forRoot(APP_ROUTES);