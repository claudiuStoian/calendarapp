import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EventService } from "app/events/event.service";
import { Subscription } from "rxjs/Subscription";
import { csEvent } from "app/events/event";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'cs-event-edit',
  templateUrl: './event-edit.component.html',
  styles: []
})
export class EventEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private eventIndex: number;
  private event: csEvent;
  private isNew: boolean = true;
  eventForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private eventsService: EventService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.eventIndex = params['id'];
          this.event = this.eventsService.getEvent(this.eventIndex);
        } else {
          this.isNew = true;
          this.event = null;
        }
        this.initForm(this.isNew);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private navigateBack() {
    this.router.navigate(['/events']);
  }

  private initForm(isNew: boolean) {
    let eventName = '';
    let eventImageUrl = '';
    let eventDescription = '';
    let eventDate: Date = null;
    let eventLocation = '';
    let eventId: number = null;
    let eventFaculty: string = '';
    let eventType: string = '';

    if (!this.isNew) {
      eventName = this.event.name;
      eventImageUrl = this.event.imagePath;
      eventDescription = this.event.description;
      eventDate = this.event.date;
      eventLocation = this.event.location;
      eventId = this.event.id;
      eventFaculty = this.event.faculty;
      eventType = this.event.eventType;
    }

    this.eventForm = this.formBuilder.group({
      name: [eventName, Validators.required],
      imagePath: [eventImageUrl, Validators.required],
      description: [eventDescription, Validators.required],
      date: [eventDate, Validators.required],
      location: [eventLocation],
      id: [eventId],
      faculty: [eventFaculty],
      eventType: [eventType]
    });
  }

  onSubmit() {
    const newEvent = this.eventForm.value;
    if (this.isNew) {
      this.eventsService.addEvent(newEvent);
    } else {
      this.eventsService.editEvent(this.event, newEvent);
    }
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

}
