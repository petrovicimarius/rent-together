import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  slideIndex = 1;
  checkScroll: boolean = false;
  public lat = 46.128620;
  public lng = 24.984512;
  public zoom = 5;
  public newAddress;
  public mapOption;
  slider;
  imagesUrl = [
    './../../../../assets/fundal1.jpeg',
    './../../../../assets/fundal2.jpg',
    './../../../../assets/fundal3.jpg',
    './../../../../assets/fundal80.png'
  ];
  price = 30;
  convertedPrice = this.price;
  currency = [
    '€',
    '$',
    '£',
    'RON'
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }

  showDivs(n) {
    let i;
    let x = document.getElementsByName('mySlides');
    if (n > x.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[this.slideIndex - 1].className = 'announcement-slider-none';
      this.slider = false;
    }
    console.log('x: ', x, x[this.slideIndex - 1]);

    x[this.slideIndex - 1].className = 'announcement-slider';
    this.slider = true;
    // x[this.slideIndex-1].style.display = 'block';
  }

  convertCurrency(type) {
    console.log('type: ', type);

    switch (type) {
      case 'RON':
        // this.convertedPrice = parseFloat((Math.round((this.price * 4.7) * 100) / 100).toFixed(2));
        this.convertedPrice = parseFloat((this.price * 4.73).toFixed(2));
        break;
      case '$':
        this.convertedPrice = parseFloat((this.price * 1.33).toFixed(2));
        // this.convertedPrice = this.price * 1.33;
        break;
      case '€':
        this.convertedPrice = this.price;
        break;
      case '£':
        this.convertedPrice = parseFloat((this.price * 0.88).toFixed(2));
        // this.convertedPrice = this.price * 0.88;
        break;
      default:
        break;
    }
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

  redirectTo() {
    this.router.navigate(['/dashboard']);
  }

}
