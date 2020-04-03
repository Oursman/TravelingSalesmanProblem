import {Component, Input, OnInit} from '@angular/core';
import {GeoPoint} from "../interfaces/geopoint";

@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.css']
})
export class GeoMapComponent implements OnInit {
  @Input() TabPoints: GeoPoint[];
  @Input() pointRadius: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  convertLongitude(longitude: number) {
    return 500+(longitude*3)
  }

  convertLatitude(latitude: number) {
    return 500+(latitude*3)
  }
}
