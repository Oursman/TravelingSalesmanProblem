import {Injectable, Input, OnInit} from '@angular/core';
import {GeoPoint} from "./interfaces/geopoint";
import {SubscriptionLike} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeoPointStorageService implements OnInit{

  constructor() { }

  ngOnInit() {

  }

  savePoints(points: GeoPoint[]){
    console.log("SAVED")
      localStorage.setItem('table', JSON.stringify(points))
  }

  loadPoints(){
    let tmp = JSON.parse(localStorage.getItem('table'));
    if(tmp == null){
      console.log("null")
      return []
    }
    console.log("exist")
    return tmp

  }

}
