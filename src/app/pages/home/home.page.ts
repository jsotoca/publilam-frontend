import { OptionsSearchModalPage } from './../options-search-modal/options-search-modal.page';
import { UiService } from 'src/app/services/ui.service';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('header') header;
  @ViewChild('adsMain') adsMain;

  constructor() {}


  ionViewWillLeave(){
    this.adsMain.stopAutoplay();
  }

  ionViewDidEnter(){
    this.header.loadLocation();
    this.adsMain.autoplay();
  }

  

}
