import { Component, OnInit } from '@angular/core';
import {Map,tileLayer,marker} from 'leaflet';
@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {

  map:Map;
  newMarker:any;
  address:string[];

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    if(!this.map) this.loadMap();
  }

  loadMap(){
    this.map = new Map("businessMap").setView([-6.7662462,-79.8435701], 16);
    tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { attribution: `Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>`}
    )
    .addTo(this.map);
  }

}
