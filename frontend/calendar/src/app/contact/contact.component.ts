import { Component, OnInit } from '@angular/core';
import { ContactService } from "app/contact/contact.service";

@Component({
  selector: 'cs-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit() {

  }

}
