import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

interface RangeSliderModel {
  minValue: number;
  maxValue: number;
  options: Options;
}
interface typeModel {
  id: number;
  text: any;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  expandModel: boolean = true;
  expandMain: boolean = true;
  expandEngine: boolean = true;
  expandEnvironment: boolean = true;
  hidden: boolean = true;
  minValue: number = 100;
  maxValue: number = 400;

  public fuelType: typeModel[] = [
    { id: 1, text: 'Diesel' },
    { id: 2, text: 'Petrol' },
    { id: 3, text: 'Electric' },
    { id: 4, text: 'Hydrogen' },
    { id: 5, text: 'Hybrid(petrol/electric)' },
    { id: 6, text: 'Hybrid(diesel/electric)' },
    { id: 7, text: 'Natural Gas' }
  ];
  public gearboxType: typeModel[] = [
    { id: 1, text: 'Manual' },
    { id: 2, text: 'Semi-automatic' },
    { id: 3, text: 'Automatic' },
  ];
  public consumptionType: typeModel[] = [
    { id: 1, text: 3 },
    { id: 2, text: 5 },
    { id: 3, text: 6 },
    { id: 4, text: 7 },
    { id: 5, text: 8 },
    { id: 6, text: 9 },
    { id: 7, text: 10 },
    { id: 8, text: 12 },
    { id: 9, text: 14 },
    { id: 10, text: 15 },
  ];

  constructor() { }

  ngOnInit() {
  }

  expandFunction(index): void {
    if (index == 'model' && this.expandModel == true) {
      this.expandModel = false;
    } else if (index == 'model' && this.expandModel == false) {
      this.expandModel = true;
    }
    if (index == 'main' && this.expandMain == true) {
      this.expandMain = false;
    } else if (index == 'main' && this.expandMain == false) {
      this.expandMain = true;
    }
    if (index == 'engine' && this.expandEngine == true) {
      this.expandEngine = false;
    } else if (index == 'engine' && this.expandEngine == false) {
      this.expandEngine = true;
    }
    if (index == 'environment' && this.expandEnvironment == true) {
      this.expandEnvironment = false;
    } else if (index == 'environment' && this.expandEnvironment == false) {
      this.expandEnvironment = true;
    }
  }
  verticalSlider: RangeSliderModel = {
    minValue: 0,
    maxValue: 0,
    options: {
      floor: 0,
      ceil: 300,
      step: 20,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return '<b>Min:</b> ' + value;
          case LabelType.High:
            return '<b>Max:</b> ' + value;
          default:
            return '' + value;
        }
      }
    }
  };
}