import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConnectionService } from '@services/api-connection.service';
import { environment } from '@environment';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  userDetails = {
    image_url: '',
    role: '',
    name: '',
  };

  constructor(
    private router: Router,
    private _service: ApiConnectionService<any>
  ) { }

  ngOnInit() {
    this.userDetails.name = localStorage.getItem('uid');
    if (localStorage.getItem('role') === 'admin') {
      this.userDetails.role = 'Administrator';
    } else {
      this.userDetails.role = 'User';
    }
  }

  editProfile() {
    this.router.navigate(['users/', '']);
  }

  logoutUser() {
    this._service.get(`${environment.base}${environment.auth}${environment.sign_out}`);
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
