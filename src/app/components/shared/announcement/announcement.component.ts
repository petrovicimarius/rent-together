import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  slideIndex = 1;
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

  redirectTo() {
    this.router.navigate(['/dashboard']);
  }

}
