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
import { DateFormatPipe } from './events/date-format.pipe';
import { MomentModule } from 'angular2-moment';

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
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    appRouting,
    MomentModule
  ],
  providers: [EventService, { provide: LOCALE_ID, useValue: "ro-RO" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
