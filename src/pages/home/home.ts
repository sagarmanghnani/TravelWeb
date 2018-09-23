import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('imageslider') slider: Slides;
  constructor(public navCtrl: NavController, public menu:MenuController) {
    this.menu.enable(true, 'menu1');
  }

  slideToNext()
  {
    this.slider.startAutoplay();
  }
}
