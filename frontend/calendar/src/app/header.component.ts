import { Component } from '@angular/core';
import { EventService } from "app/events/event.service";

@Component({
  selector: 'cs-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private eventService: EventService) { }

  onStore() {
    this.eventService.storeData().subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }

  onFetch() {
    this.eventService.fetchData();
  }

}
