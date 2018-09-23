import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var google;
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  markers = [];
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  this.menuCtrl.enable(true, 'menu2');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
    this.loadMap();
  }

  loadMap(){
 
    var point = {lat: 13.038039, lng: 80.21597};
    let latLng = new google.maps.LatLng(9.038039, 138.6010);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker(point);
  }

  addMarker(place)
  {
    let marker = new google.maps.Marker({
      map:this.map,
      animation: google.maps.Animation.DROP,
      position:place
    });
    this.markers.push(marker);
  }
}

