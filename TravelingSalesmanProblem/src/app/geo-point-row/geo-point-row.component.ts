import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {GeoPoint} from "../interfaces/geopoint";

@Component({
  selector: 'tr [point]',
  templateUrl: './geo-point-row.component.html',
  styleUrls: ['./geo-point-row.component.css']
})
export class GeoPointRowComponent implements OnInit {
  @Input() point: GeoPoint;
  @Output() pointChange = new EventEmitter<GeoPoint>();
  @Output() pointMigration = new EventEmitter<number|null>();
  private latitudeValue: number;
  private nameValue: string;
  private longitudeValue: number;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    console.log("okkk2");
    let clonedPoint = Object.assign({},null );
    this.pointMigration.emit(clonedPoint);
  }

  onPointChange(event){
    let clonedPoint = Object.assign({},event.target.value ); // copie superficielle (suffisante ici pour éviter de modifier accidentellement le point)
    this.pointChange.emit(clonedPoint);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.latitudeValue = this.point.latitude;
    this.longitudeValue = this.point.longitude;
    this.nameValue = this.point.name;
  }

  onNameChange(event) {
    this.point.name = event.target.value;
    this.onPointChange(this.point);
  }

  onLatitudeChange(event) {
    this.point.latitude = event.target.value;
    this.onPointChange(this.point);
  }

  onLongitudeChange(event) {
    this.point.longitude = event.target.value;
    this.onPointChange(this.point);
  }

}
