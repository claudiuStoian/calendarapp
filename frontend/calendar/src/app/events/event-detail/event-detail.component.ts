import { Component, OnInit, OnDestroy } from '@angular/core';
import { csEvent } from "app/events/event";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { EventService } from "app/events/event.service";
import { AuthenticationService } from "app/login/authentication.service";

@Component({
  selector: 'cs-event-detail',
  templateUrl: './event-detail.component.html'
})
export class EventDetailComponent implements OnInit, OnDestroy {
  selectedEvent: csEvent;
  private eventIndex: number;
  private subscription: Subscription;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private eventsService: EventService,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.eventIndex = params['id'];
        this.selectedEvent = this.eventsService.getEvent(this.eventIndex);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEdit() {
    this.router.navigate(['/events', this.eventIndex, 'edit']);
  }

  onDelete() {
    if (confirm('Are you sure you want to delete this event ?')) {
      this.eventsService.deleteEvent(this.selectedEvent);
      this.router.navigate(['/events']);
    }

  }

  onBack() {
    this.router.navigate(['/events']);
  }


}
