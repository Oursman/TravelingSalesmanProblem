import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GeoPoint} from "../interfaces/geopoint";

@Component({
  selector: 'app-geo-point-table',
  templateUrl: './geo-point-table.component.html',
  styleUrls: ['./geo-point-table.component.css']
})


export class GeoPointTableComponent implements OnInit {

  @Output() tableChange = new EventEmitter<GeoPoint[]>();
  table:GeoPoint[] = [];
  @Input() point: GeoPoint  = {"latitude":0,"name": "geo-simple-input", "longitude":0};


  constructor() { }

  ngOnInit(): void {
  }

  /*
  onTableChange(event){
    let clonedPoint = Object.assign({},event.target.value ); // copie superficielle (suffisante ici pour éviter de modifier accidentellement le point)
    this.tableChange.emit(clonedPoint);
  }
  */

  onAddPoint(){
    let clonedPoint = Object.assign({},this.point);
    this.table.push(clonedPoint);
  }


}
