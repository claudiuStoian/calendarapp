import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from "app/login/user";
import 'rxjs';

@Injectable()
export class AuthenticationService {
  public token: string;
  public isAuth: boolean = false;

  constructor(private http: Http) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    const body = JSON.stringify({ username: username, password: password });
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    // const headers: Headers = new Headers({ 'Authorization': 'Bearer' });
    return this.http.post('http://localhost:8000/api/api-token-auth/', body, { headers: headers })
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          localStorage.setItem('id_token', token);
          this.isAuth = true;
          return true;
        } else {
          return false;
        }
      });
  }

  logout() {
    this.isAuth = false;
    this.token = null;
    localStorage.removeItem('id_token');
  }


}
