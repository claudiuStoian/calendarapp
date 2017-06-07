import { Component, OnInit, Input } from '@angular/core';
import { Contact } from "app/contact/contact";

@Component({
  selector: 'cs-contact-item',
  templateUrl: './contact-item.component.html',
  styles: []
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;
  @Input() contactId: number;

  constructor() { }

  ngOnInit() {
  }

}
