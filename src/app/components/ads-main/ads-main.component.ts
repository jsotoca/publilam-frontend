import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads-main',
  templateUrl: './ads-main.component.html',
  styleUrls: ['./ads-main.component.scss'],
})
export class AdsMainComponent implements OnInit {

  slidesOptions = {
    initialSlide: 0,
    speed: 300,
    freeMode: true,
    slidesPerView: 1.1,
    autoplay:true
  };

  constructor() { }

  ngOnInit() {}

}
