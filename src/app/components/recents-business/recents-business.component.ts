import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recents-business',
  templateUrl: './recents-business.component.html',
  styleUrls: ['./recents-business.component.scss'],
})
export class RecentsBusinessComponent implements OnInit {

  slidesOptions = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 8,
    slidesPerView: 1,
    loop: true
  };
  
  constructor() { }

  ngOnInit() {}

}
