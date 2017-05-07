import { RouterModule, Routes } from '@angular/router';
import { EventStartComponent } from "app/events/event-start.component";
import { EventDetailComponent } from "app/events/event-detail/event-detail.component";
import { EventEditComponent } from "app/events/event-edit/event-edit.component";
import { EventListComponent } from "app/events/event-list/event-list.component";
import { AuthGuard } from "app/events/auth.guard";

export const EVENT_ROUTES: Routes = [
    { path: '', component: EventListComponent },
    { path: 'new', component: EventEditComponent },
    { path: ':id', component: EventDetailComponent },
    { path: ':id/edit', component: EventEditComponent, canActivate: [AuthGuard] },
];