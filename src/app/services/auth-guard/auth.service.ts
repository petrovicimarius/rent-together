import { Router } from "@angular/router";
import { Injectable, OnInit } from "@angular/core";

@Injectable()
export class AuthService implements OnInit {

    constructor(
        private router: Router,
    ) { }

    ngOnInit() { }

    isAuthenticated() {
        if (localStorage.getItem('access-token') != null && localStorage.getItem('client') != null && localStorage.getItem('uid') != null) {
            return true;
        } else {
            return false;
        }
    }
}
