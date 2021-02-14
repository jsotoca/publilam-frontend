import { GeocodeResponse } from './../interfaces/geocode.interface';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { Coords } from './../interfaces/coords.interface';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';
import { CurrentPosition } from '../interfaces/current-position.interface';

const gmapsUrl: string = environment.gmapsUrl;
const googleKey: string = environment.googleKey;

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  myCurrentPosition: CurrentPosition = {
    myCoords: null,
    myDistrict: null
  }


  constructor(
    private geolocation: Geolocation,
    public http: HttpClient,
    public storage:StorageService
  ) { }

  async saveCurrentPosition(){
    try {
      this.myCurrentPosition.myCoords = await this.searchCurrentPosition();
      this.myCurrentPosition.myDistrict = (await this.searchUbigeoData()).address_components[3].long_name;
      this.saveDataCurrentPosition();
      console.log('data almacenada');
    } catch (error) {
      console.log(error);
    }
  }

  searchCurrentPosition(){
    return new Promise<Coords>((resolve, reject) => {
      this.geolocation.getCurrentPosition().then((resp) => {
        let coords: Coords = {
          latitude: resp.coords.latitude,
          longitude: resp.coords.longitude,
        }
        resolve(coords);
       }).catch((error) => {
         reject(error);
       });
    });
  }

  async searchUbigeoData(){
    const { results } = await this.http.get<GeocodeResponse>(`${gmapsUrl}${this.myCurrentPosition.myCoords.latitude},${this.myCurrentPosition.myCoords.longitude}&key=${googleKey}`).toPromise();
    return results[0];
  }

  saveDataCurrentPosition(){
    this.storage.saveData('currentPosition',this.myCurrentPosition);
  }

  async loadDataCurrentPosition(){
    const data:CurrentPosition = await this.storage.getData('currentPosition');
    if(data) this.myCurrentPosition = data;
  }


}
