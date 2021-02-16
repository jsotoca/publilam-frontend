import { LocationService } from 'src/app/services/location.service';
import { Component, OnInit } from '@angular/core';
import {Map,tileLayer,marker, latLng} from 'leaflet';
import { Coords } from 'src/app/interfaces/coords.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  map:Map;
  myCoords: Coords;
  newMarker: any;
  constructor(
    private location:LocationService
  ) { }

  ngOnInit() {
    this.location.loadDataCurrentPosition();
    this.myCoords = this.location.myCurrentPosition.myCoords;
    if(!this.map) {
      this.loadMap();
    }
  }



  loadMap(){
    this.map = new Map("businessMap");
    
    const self = this;
    
    this.map.on("load",function() { setTimeout(() => {
      self.map.invalidateSize();
    }, 1); });
    if(this.myCoords) this.map.setView([this.myCoords.latitude, this.myCoords.longitude], 16);

    // const coor = latLng(this.myCoords.latitude, this.myCoords.longitude);
    
    this.locatePosition();
    
    this.map.scrollWheelZoom.disable();
    
    tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { attribution: `Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>`}
    )
    .addTo(this.map);
  }

  locatePosition(){
    this.map.locate({maxZoom: 16}).on("locationfound", (e: any)=> {
      this.newMarker = marker([this.myCoords.latitude, this.myCoords.longitude], {draggable: 
      false}).addTo(this.map);
      this.newMarker.bindPopup("Tú estas aquí!").openPopup();
    });
  }

}
