import {Injectable, Input, OnInit} from '@angular/core';
import {GeoPoint} from "./interfaces/geopoint";
import {SubscriptionLike} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeoPointStorageService implements OnInit{
  private points: void;
  private serviceSubscription: SubscriptionLike;

  constructor() { }

  ngOnInit() {

  }

  savePoints(points: GeoPoint[]){
    try {
      localStorage.setItem('points', JSON.stringify(points))
    }catch(e){
      console.log(e)
    }
  }

  loadPoints(){
    JSON.parse(localStorage.getItem('points'));
  }

}
