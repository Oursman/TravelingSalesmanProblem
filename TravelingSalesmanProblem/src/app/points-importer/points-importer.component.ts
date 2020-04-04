import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GeoPoint} from "../interfaces/geopoint";
import {element} from "protractor";

@Component({
  selector: 'app-points-importer',
  templateUrl: './points-importer.component.html',
  styleUrls: ['./points-importer.component.css']
})
export class PointsImporterComponent implements OnInit {
  @Output() tableChange = new EventEmitter<GeoPoint[]>();
  @Input() TabPoints: GeoPoint[];
  private file: any;

  constructor() { }

  ngOnInit(): void {
  }

  fileChanged(event) {
    this.file = event.target.files[0];
  }

  isGeoPoint(obj: any){
    return typeof(obj.name) == 'string' && typeof(obj.latitude) == 'number' && typeof(obj.longitude) == 'number';
  }
  uploadDocument() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);

        this.TabPoints = JSON.parse((<string>fileReader.result))

      this.TabPoints.forEach(element =>{
        if( this.isGeoPoint(element)!=true){
          console.error("Point pas beau ");
        }
      });
      let clonedPoint = Object.assign({}, this.TabPoints); // copie superficielle (suffisante ici pour éviter de modifier accidentellement le point)
      this.tableChange.emit(clonedPoint);
    }
    if (fileReader!=null){
      fileReader.readAsText(this.file);
    }else{
      console.error("fichier pas beau ");
    }

  }
}
