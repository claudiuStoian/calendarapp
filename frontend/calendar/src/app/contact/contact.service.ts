import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Contact } from "app/contact/contact";
import 'rxjs/Rx';
import { AuthenticationService } from "app/login/authentication.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ContactService {
  contactsChanged = new EventEmitter<Contact[]>();

  private contacts: Contact[] = [];

  constructor(
    private http: Http,
    private authService: AuthenticationService,
  ) { }

  getContacts() {
    return this.contacts;
  }

  getContact(id: number) {
    return this.contacts.find(
      contact => contact.id == id
    )
  }

  deleteContact(contact: Contact) {
    const id: number = contact.id;
    this.contacts.splice(this.contacts.indexOf(contact), 1);
    const headers = new Headers({
      'Authorization': 'Bearer ' + this.authService.token
    });
    return this.http.delete('http://localhost:8000/api/contact/' + id + '/', { headers: headers })
      .map((data: Response) => data.json())
      .subscribe(
      data => { }
      );
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
    const body = JSON.stringify(contact);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    return this.http.post('http://localhost:8000/api/contact/', body, { headers: headers })
      .map((data: Response) => data.json())
      .subscribe(
      data => { }
      );
  }

  editContact(contact: Contact) {
    this.contacts[this.contacts.indexOf(contact)] = contact;
    const id: number = contact.id;
    const body = JSON.stringify(contact);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.authService.token
    });
    return this.http.put('http://localhost:8000/api/contact/' + id + '/', body, { headers: headers })
      .map((data: Response) => data.json())
      .subscribe(
      data => { }
      );
  }

  fetchContacts() {
    return this.http.get('http://localhost:8000/api/contact/')
      .map((response: Response) => response.json())
      .subscribe(
      (data: Contact[]) => {
        this.contacts = data;
        this.contactsChanged.emit(this.contacts);
      }
      );
  }
}
