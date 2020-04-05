import {Component, Input, OnInit} from '@angular/core';
import {GeoPoint} from "../interfaces/geopoint";
import {GeoPointsResponse} from "../location-fetcher.service";

@Component({
  selector: 'app-tspcomputer',
  templateUrl: './tspcomputer.component.html',
  styleUrls: ['./tspcomputer.component.css']
})
export class TSPComputerComponent implements OnInit {

  @Input() table: GeoPoint[];
  @Input() temperature:any;
  @Input() decreaseRate:any;
  @Input() time:any;
  @Input() start: GeoPoint;
  @Input() end: GeoPoint;
  @Input() typedPlace: string;

  constructor() { }

  ngOnInit(): void {
    this.temperature = 0.0
    this.time = 0.0
    this.decreaseRate = 0.0
    this.start = this.table[0];
    this.end = this.table[this.table.length-1];

  }

  StartPoint(e) {
    let name = e.target.value;
    let element = this.table.filter(x => x.name === name)[0];
    this.start = element;
  }

  EndPoint(e) {
    let name = e.target.value;
    let element = this.table.filter(x => x.name === name)[0];
    this.end = element;
  }

  onTemperatureChange(e) {
    this.temperature =e.target.value;
  }
}
