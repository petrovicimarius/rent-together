import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '@services/api-connection.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userData = {
    name: '',
    email: '',
    position: '',
    department: '',
    phone: '',
    image: '',
  };

  message: string;
  imgURL: any;

  constructor(
    private _service: ApiConnectionService<any>,
  ) { }

  ngOnInit() {
    // this.getUser();
  }

  getUser(): void {
    const cleaner = this._service.get(`${environment.base}${environment.users}${'3'}`).subscribe(res => {
      this.userData = res.user;
      cleaner.unsubscribe();
    },
      err => {
        console.error("ERROR getting user profile: ", err);
      });
  }

  preview(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.userData.image = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
