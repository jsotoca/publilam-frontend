import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-ads-main',
  templateUrl: './ads-main.component.html',
  styleUrls: ['./ads-main.component.scss'],
})
export class AdsMainComponent implements OnInit {

  @ViewChild('adsMain') mainSlides: IonSlides;

  slidesOptions = {
    initialSlide: 0,
    speed: 300,
    slidesPerView: 1.1,
    autoplay:true
  };

  constructor() { }

  ngOnInit() {}

  ionViewWillLeave(){
    this.mainSlides.stopAutoplay();
  }
  
  ionViewDidEnter() {
  this.mainSlides.startAutoplay();
  }

  afterslidesLoad() {
    this.mainSlides.startAutoplay();
  }

}
