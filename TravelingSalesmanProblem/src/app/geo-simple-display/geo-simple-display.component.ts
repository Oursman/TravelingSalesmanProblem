import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-geo-simple-display',
  templateUrl: './geo-simple-display.component.html',
  styleUrls: ['./geo-simple-display.component.css']
})

export class GeoSimpleDisplayComponent implements OnInit {

  @Input() point :GeoPoint;
  
  constructor() { }

  ngOnInit() {
  }

    gotoNorth($event){
    if(this.point.latitude+1<90){
      this.point.latitude += 1; 
    }
  }

}
