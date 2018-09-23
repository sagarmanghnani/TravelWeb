import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


/**
 * Generated class for the BlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu:MenuController) {
    //this.menu.enable(true, 'menu3');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
  }

}
