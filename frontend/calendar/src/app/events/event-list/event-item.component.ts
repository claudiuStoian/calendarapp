import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { csEvent } from "app/events/event";

@Component({
  selector: 'cs-event-item',
  templateUrl: './event-item.component.html'
})
export class EventItemComponent implements OnInit, OnChanges {
  @Input() event: csEvent;
  @Input() eventId: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

  }

}
