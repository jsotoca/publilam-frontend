import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('adsMain') adsMain;

  constructor() {}


  ionViewWillLeave(){
    this.adsMain.stopAutoplay();
  }

  ionViewDidEnter(){
    this.adsMain.autoplay();
  }

}
