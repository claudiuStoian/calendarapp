import { RouterModule, Routes } from '@angular/router';
import { EventDetailComponent } from "app/events/event-detail/event-detail.component";
import { EventEditComponent } from "app/events/event-edit/event-edit.component";
import { EventListComponent } from "app/events/event-list/event-list.component";
import { AuthGuard } from "app/events/auth.guard";
import { ContactListComponent } from "app/contact/contact-list/contact-list.component";
import { ContactCreateComponent } from "app/contact/contact-create/contact-create.component";
import { ContactDetailComponent } from "app/contact/contact-detail/contact-detail.component";

export const CONTACT_ROUTES: Routes = [
    { path: '', redirectTo: '/new', pathMatch: 'full' },
    { path: 'requests', component: ContactListComponent, canActivate: [AuthGuard] },
    { path: 'new', component: ContactCreateComponent },
    { path: 'requests/:id', component: ContactDetailComponent, canActivate: [AuthGuard] },
];