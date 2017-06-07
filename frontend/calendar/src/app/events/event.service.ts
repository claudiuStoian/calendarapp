import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { csEvent } from "app/events/event";
import 'rxjs/Rx';
import { AuthenticationService } from "app/login/authentication.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class EventService {
  eventsChanged = new EventEmitter<csEvent[]>();
  public faculties: string[] = ['Facultatea de Matematica si Informatica', 'Facultatea de Medicina'];
  public eventTypes: string[] = ['Prezentare', 'Seminar stiintific', 'Curs'];

  private events: csEvent[] = [];

  constructor(private http: Http, private authService: AuthenticationService) { }

  getEvents() {
    return this.events;
  }

  getEvent(id: number) {
    return this.events.find(
      event => event.id == id
    );
  }

  deleteEvent(event: csEvent) {
    const id: number = event.id;
    this.events.splice(this.events.indexOf(event), 1);
    const headers = new Headers({
      'Authorization': 'Bearer ' + this.authService.token
    });
    return this.http.delete('http://localhost:8000/api/events/' + id + '/', { headers: headers })
      .map((data: Response) => data.json())
      .subscribe(
      data => { }
      );
  }

  addEvent(event: csEvent) {
    this.events.push(event);
    const body = JSON.stringify(event);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.authService.token
    });
    return this.http.post('http://localhost:8000/api/events/', body, { headers: headers })
      .map((data: Response) => data.json())
      .subscribe(
      data => { }
      );
  }

  editEvent(oldEvent: csEvent, newEvent: csEvent) {
    this.events[this.events.indexOf(oldEvent)] = newEvent;
    const id: number = newEvent.id;
    const body = JSON.stringify(newEvent);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.authService.token
    });
    return this.http.put('http://localhost:8000/api/events/' + id + '/', body, { headers: headers })
      .map((data: Response) => data.json())
      .subscribe(
      data => { }
      );
  }

  /*storeData() {
    const body = JSON.stringify(this.events);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.patch('http://localhost:8000/api/events/', body, { headers: headers })
    //.map((data: Response) => data.json());
  }*/

  fetchData() {
    return this.http.get('http://localhost:8000/api/events/')
      .map((response: Response) => response.json())
      .subscribe(
      (data: csEvent[]) => {
        this.events = data;
        this.eventsChanged.emit(this.events);
      }
      );
  }


}
