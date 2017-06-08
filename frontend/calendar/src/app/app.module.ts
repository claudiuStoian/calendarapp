import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { EventsComponent } from './events/events.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventItemComponent } from './events/event-list/event-item.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { DropdownDirective } from './dropdown.directive';
import { EventService } from "app/events/event.service";
import { appRouting } from "app/app.routes";
import { EventStartComponent } from './events/event-start.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { FilterPipe } from './events/filter.pipe';
import { MomentModule } from 'angular2-moment';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from "app/login/authentication.service";
import { AuthGuard } from "app/events/auth.guard";
import { Ng2PaginationModule } from 'ng2-pagination';
import { DateFilterPipe } from './events/event-list/date-filter.pipe';
import { DateFormatPipe } from "app/events/event-list/date-format.pipe";
import { LocationFilterPipe } from './events/event-list/location-filter.pipe';
import { FacultyFilterPipe } from './events/event-list/faculty-filter.pipe';
import { EtypeFilterPipe } from './events/event-list/etype-filter.pipe';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactItemComponent } from './contact/contact-list/contact-item.component';
import { ContactCreateComponent } from './contact/contact-create/contact-create.component';
import { ContactService } from "app/contact/contact.service";
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    EventListComponent,
    EventItemComponent,
    EventDetailComponent,
    DropdownDirective,
    EventStartComponent,
    EventEditComponent,
    FilterPipe,
    DateFormatPipe,
    LoginComponent,
    DateFilterPipe,
    LocationFilterPipe,
    FacultyFilterPipe,
    EtypeFilterPipe,
    ContactComponent,
    ContactListComponent,
    ContactItemComponent,
    ContactCreateComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    appRouting,
    MomentModule,
    Ng2PaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDVAyfmcq7tRoELVB6aBs1YxitZ_bnjXZE'
    })
  ],
  providers: [EventService, ContactService, AuthenticationService, AuthGuard, { provide: LOCALE_ID, useValue: "ro-RO" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
