import { Component, OnInit } from '@angular/core';
import { Contact } from "app/contact/contact";
import { AuthenticationService } from "app/login/authentication.service";
import { Router } from "@angular/router";
import { ContactService } from "app/contact/contact.service";

@Component({
  selector: 'cs-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(
    private contactService: ContactService,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.contactService.contactsChanged.subscribe(
      (contacts: Contact[]) => this.contacts = contacts
    );
  }

}
