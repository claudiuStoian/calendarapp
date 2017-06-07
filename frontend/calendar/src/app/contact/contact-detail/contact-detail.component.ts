import { Component, OnInit } from '@angular/core';
import { Contact } from "app/contact/contact";
import { Subscription } from "rxjs/Subscription";
import { Router, ActivatedRoute } from "@angular/router";
import { ContactService } from "app/contact/contact.service";
import { AuthenticationService } from "app/login/authentication.service";

@Component({
  selector: 'cs-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  selectedContact: Contact;
  private contactId: number;
  private subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.contactId = params['id'];
        this.selectedContact = this.contactService.getContact(this.contactId)
      }
    );
  }

  onDone() {
    this.selectedContact.done = true;
    this.contactService.editContact(this.selectedContact);
    this.navigateBack();
  }

  private navigateBack() {
    this.router.navigate(['/contact/requests']);
  }

  onDelete() {
    if (confirm('Are you sure you want to delete this request ?')) {
      this.contactService.deleteContact(this.selectedContact);
      this.router.navigate(['/contact/requests']);
    }
  }

}
