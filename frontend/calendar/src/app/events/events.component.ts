import { Component, OnInit, OnChanges } from '@angular/core';
import { csEvent } from "app/events/event";
import { EventService } from "app/events/event.service";

@Component({
  selector: 'cs-events',
  templateUrl: './events.component.html',
  styles: [`
    .center-align {
      display: flex;
      align-items: center;
    }
  `]
})
export class EventsComponent implements OnInit {
  selectedEvent: csEvent;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

}
