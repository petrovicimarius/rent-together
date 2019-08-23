import { Component, OnInit, HostListener } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

interface RangeSliderModel {
  minValue: number;
  maxValue: number;
  options: Options;
}
interface typeModel {
  id: number;
  text: string;
  models?: any;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  markId: number;
  bmwMarkState: boolean = false;
  checkScroll: boolean = false;
  public lat = 46.128620;
  public lng = 24.984512;
  public zoom = 5;
  public newAddress;
  public mapOption;
  minValue: number = 100;
  maxValue: number = 400;
  public slogan: string = "rent everywhere. rent quick. do it smart.";
  public announcements: Array<any> = [];
  public ids: Array<any> = [];

  public modelExample: typeModel[] = [
    { id: 1, text: 'A1' },
    { id: 2, text: 'A2' },
    { id: 3, text: 'A3' },
    { id: 4, text: 'A4' },
    { id: 5, text: 'A5' }
  ];

  public fuelTypes: typeModel[] = [
    { id: 1, text: 'Diesel' },
    { id: 2, text: 'Petrol' },
    { id: 3, text: 'Electric' },
    { id: 4, text: 'Hybrid' }
  ]

  public markExample: typeModel[] = [
    { id: 1, text: 'Audi', models: ['A1', 'A2', 'A3', 'A4', 'A4 allroad', 'A5', 'A6', 'A7', 'A8'] },
    { id: 2, text: 'Bmw', models: ['Seria 1', 'Seria 2', 'Seria 3', 'Seria 4', 'Seria 5', 'Seria 6', 'Seria 7', 'Seria 8', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7'] },
    { id: 3, text: 'Wolkswagen', models: ['Golf', 'Touran', 'Polo', 'Tuareg', 'Tiguan', 'Passat', 'Arteon', 'Arteon', 'Comercials'] },
    { id: 4, text: 'Skoda', models: ['Fabia', 'Octavia', 'Karoq', 'Kodiaq', 'Scala'] },
    { id: 5, text: 'Volvo' },
    { id: 6, text: 'Seat' },
    { id: 7, text: 'Fiat' },
    { id: 8, text: 'Hyundai' },
    { id: 9, text: 'Mitubishi' },
    { id: 10, text: 'Mercedes' },

  ];
  public announcementExample: Array<Object> = [
    { id: 1, img: './assets/fundal1.jpeg', title: 'Audi A4', description: 'I`m renting Audi A4 for one day.', rating: 4, phone: '0753637600' },
    { id: 2, img: './assets/fundal1.jpeg', title: 'Audi A4', description: 'I`m renting Audi A4 for one day.', rating: 4, phone: '0753637600' },
    { id: 3, img: './assets/fundal1.jpeg', title: 'Audi A4', description: 'I`m renting Audi A4 for one day.', rating: 4, phone: '0753637600' },
    { id: 4, img: './assets/fundal1.jpeg', title: 'Audi A4', description: 'I`m renting Audi A4 for one day.', rating: 4, phone: '0753637600' },
    { id: 5, img: './assets/fundal1.jpeg', title: 'Audi A4', description: 'I`m renting Audi A4 for one day.', rating: 4, phone: '0753637600' },
    { id: 6, img: './assets/fundal1.jpeg', title: 'Audi A4', description: 'I`m renting Audi A4 for one day.', rating: 4, phone: '0753637600' },
    { id: 7, img: './assets/fundal1.jpeg', title: 'Audi A4', description: 'I`m renting Audi A4 for one day.', rating: 4, phone: '0753637600' },
    { id: 8, img: './assets/fundal1.jpeg', title: 'Audi A4', description: 'I`m renting Audi A4 for one day.', rating: 4, phone: '0753637600' },
    { id: 9, img: './assets/fundal1.jpeg', title: 'Audi A4', description: 'I`m renting Audi A4 for one day.', rating: 4, phone: '0753637600' },
    { id: 10, img: './assets/fundal1.jpeg', title: 'Audi A4', description: 'I`m renting Audi A4 for one day.', rating: 4, phone: '0753637600' },
    { id: 11, img: './assets/fundal1.jpeg', title: 'Audi A4', description: 'I`m renting Audi A4 for one day.', rating: 4, phone: '0753637600' }
  ];

  public mapPoints: Array<Object> = [
    { id: 1, lat: 47.6393487, lng: 26.2551945 },
    { id: 2, lat: 46.7834818, lng: 23.546473 },
    { id: 3, lat: 44.4379269, lng: 26.024598 },
    { id: 4, lat: 45.741163, lng: 21.1465503 },
    { id: 5, lat: 47.7376245, lng: 26.6243892 },
    { id: 6, lat: 47.1562327, lng: 27.5169309 },
    { id: 7, lat: 44.1811445, lng: 28.5599668 },
  ];



  constructor(private router: Router, private db: AngularFirestore, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    const db = firebase.firestore();
    db.collection("announcements").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        this.announcements.push(doc.data());
        this.ids.push(doc.id);
      });
      console.log("ids: ", this.ids, ' || data: ', this.announcements);
    });
  }

  redirectDeepSearch() {
    this.router.navigate(['/search']);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 400) {
      this.checkScroll = true;
    } else if (number < 400) {
      this.checkScroll = false;
    }
  }

  focusPoint(state): void {
    if (state == true) {
      this.lat = 47.6393487;
      this.lng = 26.2551945;
      this.zoom = 10;
    }
    else if (state == false) {
      this.lat = 46.128620;
      this.lng = 24.984512;
      this.zoom = 5;
    }
  }


  toggleMarkState(id): void {
    this.markId = id;
  }

  redirectTo(id): void {
    console.log("Item: " + id);
    this.router.navigate(['announcement/', id]);
  }

  convertAddress(address) {
    this.newAddress = address;
    this.newAddress = this.newAddress.replace(/ /g, "+");
    // this.http
    //   .get(
    //     `https://maps.googleapis.com/maps/api/geocode/json?address=${
    //     this.newAddress
    //     }&key=AIzaSyAqcFHBPQuY6E-Fd5mn9DKlks8tHhHHewM`
    //   )
    //   .subscribe((res: any) => {
    //     this.lat = res.results[0].geometry.location.lat;
    //     this.lng = res.results[0].geometry.location.lng;
    //   });
  }

  verticalSlider: RangeSliderModel = {
    minValue: 0,
    maxValue: 0,
    options: {
      floor: 0,
      ceil: 10000,
      step: 100,
      vertical: true,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return '<b>Min:</b> $' + value;
          case LabelType.High:
            return '<b>Max:</b> $' + value;
          default:
            return '$' + value;
        }
      }
    }
  };
}
