import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { csEvent } from "app/events/event";
import { EventService } from "app/events/event.service";

@Component({
  selector: 'cs-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: csEvent[] = [];
  search: string;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
    this.eventService.eventsChanged.subscribe(
      (events: csEvent[]) => this.events = events.sort(
        (a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
    );
  }

}
