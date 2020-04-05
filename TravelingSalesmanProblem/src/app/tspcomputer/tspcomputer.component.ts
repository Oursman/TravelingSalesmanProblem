import {Component, Input, OnInit} from '@angular/core';
import {GeoPoint} from "../interfaces/geopoint";

@Component({
  selector: 'app-tspcomputer',
  templateUrl: './tspcomputer.component.html',
  styleUrls: ['./tspcomputer.component.css']
})
export class TSPComputerComponent implements OnInit {

  @Input() table: GeoPoint[];
  @Input() temperature:number;
  @Input() decreaseRate:number;
  @Input() time:number;
  private p1: GeoPoint = {"latitude": 0, "name": "point1", "longitude": 0};
  private p2: GeoPoint = {"latitude": 1, "name": "point2", "longitude": 1};
  private nameTable = [];
  private longitudeTable:number[] = [];
  private latitudeTable:number[] = [];
  @Input() start: GeoPoint;
  @Input() end: GeoPoint;

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

    console.log(this.splitTable(this.table))
    console.log(this.getTableDistance(this.longitudeTable,this.latitudeTable))

  }

  splitTable(table:GeoPoint[]){
    table.forEach(x => {
      this.nameTable.push(x.name)
      this.longitudeTable.push(x.longitude)
      this.latitudeTable.push(x.latitude)
    })

  }
  /*
  getDistance(p1:GeoPoint,p2:GeoPoint){
    return ((Math.abs(p1.longitude-p2.longitude)**2)+(Math.abs(p1.longitude-p2.latitude)**2))**(1/2)
  }

  getRoadDistance(table:GeoPoint[]){
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return table.reduce(reducer)
  }
  */

  getTableDistance(a:number[], b:number[]) {
    return a.map((x, i) => Math.abs( x - b[i] ) ** 2).reduce((sum, now) => sum + now) ** (1/2)
  }




  onTemperatureChange(e) {
    this.temperature =e.target.value;
  }
}
