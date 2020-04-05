import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GeoPoint} from "../interfaces/geopoint";

@Component({
  selector: 'app-tspcomputer',
  templateUrl: './tspcomputer.component.html',
  styleUrls: ['./tspcomputer.component.css']
})
export class TSPComputerComponent implements OnInit {

  @Output() tableChange = new EventEmitter<GeoPoint[]>();
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
    let newTable =  Object.assign({},this.table);

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
    let newTable = Object.assign({},this.table);



    console.log(this.getTableDistance(this.table))
    console.log(this.getTableDistance(this.randomSwap(newTable)))

  }

  /*
  splitTable(table:GeoPoint[]){
    table.forEach(x => {
      this.nameTable.push(x.name)
      this.longitudeTable.push(x.longitude)
      this.latitudeTable.push(x.latitude)
    })
  }*/
  splitTable(table:GeoPoint[],a:number[],b:number[]){
    table.forEach(x => {
      this.nameTable.push(x.name)
      a.push(x.longitude)
      b.push(x.latitude)
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
  /*
  getTableDistance(a:number[], b:number[]) {
    return a.map((x, i) => Math.abs( x - b[i] ) ** 2).reduce((sum, now) => sum + now) ** (1/2)
  }*/

  getTableDistance(table:GeoPoint[]) {
    let a:number[]=[]  // SI TA UN PROBLEME  = mets en variable COMPOSANT this.a etc..
    let b:number[]=[]
    this.splitTable(table,a,b)
    return a.map((x, i) => Math.abs( x - b[i] ) ** 2).reduce((sum, now) => sum + now) ** (1/2)
  }

  getRandomInt(max:number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  randomSwap(table:GeoPoint[]){
    console.log(table)
    console.log(table.length)
    let i1 = this.getRandomInt(table.length-1)
    let i2 = this.getRandomInt(table.length-1)

    console.log("first point to swap "+table[i1])
    console.log("second point to swap "+table[i2])

    let tmp = table[i1]
    this.table[i1] = table[i2]
    this.table[i2] = tmp

    return table

    /*
    let clonedPoint = Object.assign({},table); // copie superficielle (suffisante ici pour éviter de modifier accidentellement le point)
    this.tableChange.emit(clonedPoint);*/
  }

  onTemperatureChange(e) {
    this.temperature =e.target.value;
  }
}
