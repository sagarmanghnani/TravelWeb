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
 
    var point = {lat: 12.971599, lng: 77.594566};
    let latLng = new google.maps.LatLng(12.971599, 77.594566);
 
    let mapOptions = {
      center: latLng,
      zoom: 10,
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

