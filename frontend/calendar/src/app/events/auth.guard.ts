import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from "app/login/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthenticationService) { }

    canActivate() {
        if (this.authService.isAuth) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}