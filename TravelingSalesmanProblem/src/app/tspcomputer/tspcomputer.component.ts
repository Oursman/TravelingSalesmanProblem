import {Component, Input, OnInit} from '@angular/core';
import {GeoPoint} from "../interfaces/geopoint";

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


  constructor() { }

  ngOnInit(): void {
    this.temperature = 0.0
    this.time = 0.0
    this.decreaseRate = 0.0
  }

}
