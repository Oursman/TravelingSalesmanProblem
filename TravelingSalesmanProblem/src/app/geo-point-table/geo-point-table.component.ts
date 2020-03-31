import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GeoPoint} from "./interfaces/geopoint";

@Component({
  selector: 'app-geo-point-table',
  templateUrl: './geo-point-table.component.html',
  styleUrls: ['./geo-point-table.component.css']
})
export class GeoPointTableComponent implements OnInit {

  @Output() tableChange = new EventEmitter<GeoPoint[]>();

  constructor() { }

  ngOnInit(): void {
  }

}
