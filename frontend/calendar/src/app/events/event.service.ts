import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { csEvent } from "app/events/event";
import 'rxjs/Rx';

@Injectable()
export class EventService {
  eventsChanged = new EventEmitter<csEvent[]>();

  private events: csEvent[] = [

  ];

  constructor(private http: Http) { }

  getEvents() {
    return this.events;
  }

  getEvent(id: number) {
    return this.events[id];
  }

  deleteEvent(event: csEvent) {
    this.events.splice(this.events.indexOf(event), 1);
  }

  addEvent(event: csEvent) {
    this.events.push(event);
  }

  editEvent(oldEvent: csEvent, newEvent: csEvent) {
    this.events[this.events.indexOf(oldEvent)] = newEvent;
  }

  storeData() {
    const body = JSON.stringify(this.events);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://calendar-17c14.firebaseio.com/events.json', body, { headers: headers });
  }

  fetchData() {
    return this.http.get('https://calendar-17c14.firebaseio.com/events.json')
      .map((response: Response) => response.json())
      .subscribe(
      (data: csEvent[]) => {
        this.events = data;
        this.eventsChanged.emit(this.events);
      }
      );
  }


}
