import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: Storage
  ) { }

  saveData(key: string, value: any){
    this.storage.set(key, value);
  }

  async getData(key: string){
    const value = await this.storage.get(key);
    if(value) return value;
  }


}
