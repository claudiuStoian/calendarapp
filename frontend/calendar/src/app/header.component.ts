import { Component } from '@angular/core';
import { AuthenticationService } from "app/login/authentication.service";

@Component({
  selector: 'cs-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private authService: AuthenticationService) { }

  onLogout() {
    this.authService.logout();
  }
  /*
  onStore() {
    this.eventService.storeData().subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }

  onFetch() {
    this.eventService.fetchData();
  }
  */
}
