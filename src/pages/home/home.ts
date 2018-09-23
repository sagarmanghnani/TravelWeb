import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('imageslider') slider: Slides;
  constructor(public navCtrl: NavController, ) {

  }

  slideToNext()
  {
    this.slider.startAutoplay();
  }
}
