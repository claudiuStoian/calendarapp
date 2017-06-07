import { Component, OnInit } from '@angular/core';
import { EventService } from "app/events/event.service";
import { ContactService } from "app/contact/contact.service";

@Component({
  selector: 'cs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private eventService: EventService,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.eventService.fetchData();
    this.contactService.fetchContacts();
  }
}
