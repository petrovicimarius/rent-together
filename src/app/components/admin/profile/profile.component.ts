import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '@services/api-connection.service';
import { environment } from 'src/environments/environment';
// import { GeoLocationService } from './../../../services/geo-location-service';

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
    location: '',
  };

  message: string;
  autoLocation;
  imgURL: any;
  coordinates;
  lat;
  long;
  // GeoLocationService: any;

  constructor(
    private _service: ApiConnectionService<any>,
    // private geoLocationService: GeoLocationService,
  ) { }

  ngOnInit() {
    // this.getUser();
    // this.GeoLocationService.getPosition().subscribe(
    //   (pos: Position) => {
    //     this.coordinates = {
    //       latitude: +(pos.coords.latitude),
    //       longitude: +(pos.coords.longitude)
    //     };
    //   });
    // console.log('coord: ', this.coordinates);

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

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function showPosition(position) {
        console.log(position.coords.latitude, position.coords.longitude);
        // this.autoLocation.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;

        return position.coords.latitude, position.coords.longitude;
        // return this.lat = position.coords.latitude, this.long = position.coords.longitude;
      }
      );
    } else {
      this.autoLocation.innerHTML = "Geolocation is not supported by this browser.";
    }
    console.log();

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
