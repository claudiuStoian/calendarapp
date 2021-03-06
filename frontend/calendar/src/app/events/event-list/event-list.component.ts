import { Component, OnInit, OnChanges } from '@angular/core';
import { csEvent } from "app/events/event";
import { EventService } from "app/events/event.service";
import { AuthenticationService } from "app/login/authentication.service";
import { Router } from "@angular/router";
import * as moment from 'moment';

@Component({
  selector: 'cs-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, OnChanges {
  events: csEvent[] = [];
  search: string;
  defaultDate = moment();
  loc: string = '';
  fac: string = '';
  etype: string = '';

  constructor(private eventService: EventService, private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
    this.eventService.eventsChanged.subscribe(
      (events: csEvent[]) => this.events = events
    );
  }

  ngOnChanges() {
    this.events = this.eventService.getEvents();
    this.eventService.eventsChanged.subscribe(
      (events: csEvent[]) => this.events = events
    );
  }

  onNew() {
    this.router.navigate(['/events/new']);
  }

}
