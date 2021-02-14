import { GeocodeResponse } from './../interfaces/geocode.interface';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { Coords } from './../interfaces/coords.interface';
import { environment } from 'src/environments/environment';

const gmapsUrl: string = environment.gmapsUrl;
const googleKey: string = environment.googleKey;

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  myCoords: Coords = null;
  myDistrict: string = null;

  constructor(
    private geolocation: Geolocation,
    public http: HttpClient
  ) { }

  async saveCurrentPosition(){
    try {
      this.myCoords = await this.searchCurrentPosition();
      this.myDistrict = (await this.searchUbigeoData()).address_components[3].long_name;
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
    const { results } = await this.http.get<GeocodeResponse>(`${gmapsUrl}${this.myCoords.latitude},${this.myCoords.longitude}&key=${googleKey}`).toPromise();
    return results[0];
  }

}
