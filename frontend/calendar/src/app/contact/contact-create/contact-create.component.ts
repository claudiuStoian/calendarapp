import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from "app/contact/contact";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ContactService } from "app/contact/contact.service";

@Component({
  selector: 'cs-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  private contact: Contact;
  contactForm: FormGroup;

  constructor(
    private router: Router,
    private contactService: ContactService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let contactId: number = null;
    let contactName: string = '';
    let contactEmail: string = '';
    let contactTitle: string = '';
    let contactMessage: string = '';
    let contactDone: boolean = false;

    this.contactForm = this.formBuilder.group({
      id: [contactId],
      name: [contactName, Validators.required],
      email: [contactEmail, Validators.required],
      title: [contactTitle, Validators.required],
      message: [contactMessage, Validators.required],
      done: [contactDone]
    })
  }

  private navigateBack() {
    this.router.navigate(['/events']);
  }

  onSubmit() {
    const newContact = this.contactForm.value;
    this.contactService.addContact(newContact);
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }
}
