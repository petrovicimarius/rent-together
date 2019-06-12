import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from "./../../../services/auth-guard/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {


  focusLogin: boolean = true;
  focusRegister: boolean = false;
  focusReset: boolean = false;
  public text: string;

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit() {
  }

  // @ViewChild('login') input: ElementRef;
  // changeFocus(): void {
  //   setTimeout(function () {
  //     this.input.focus();
  //   }, 3);
  // }

  switchState(state): void {
    if (state == 'login') {
      this.focusLogin = true;
      this.focusRegister = false;
      this.focusReset = false;
    }
    else if (state == 'register') {
      this.focusLogin = false;
      this.focusRegister = true;
      this.focusReset = false;
    }
    else if (state == 'reset') {
      this.focusLogin = false;
      this.focusRegister = false;
      this.focusReset = true;
    }

  }

  onLogin(): void {
    console.log("aaaaaaa");

  }

}
