import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "app/login/authentication.service";
import { User } from "app/login/user";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'cs-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private user: User;
  error: string = '';
  loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthenticationService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.authService.isAuth = false;
    localStorage.removeItem('id_token');
    this.initForm();
  }

  ngOnDestroy() {
  }

  private initForm() {
    let userName = '';
    let userPassword = '';

    this.loginForm = this.formBuilder.group({
      username: [userName, Validators.required],
      password: [userPassword, Validators.required]
    });
  }

  onLogin() {
    this.user = this.loginForm.value;
    this.authService.login(this.user.username, this.user.password)
      .subscribe(result => {
        if (result) {
          this.authService.isAuth = true;
          this.router.navigate(['/events']);
        } else {
          this.error = 'Username or password is incorrect';
        }
      })
  }

  onCancel() {
    this.user = null;
    this.router.navigate(['/events']);
  }

}
