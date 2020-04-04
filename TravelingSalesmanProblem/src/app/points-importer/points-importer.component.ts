import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-points-importer',
  templateUrl: './points-importer.component.html',
  styleUrls: ['./points-importer.component.css']
})
export class PointsImporterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //solution 1

  file:any;
  fileChanged(event) {
    this.file = event.target.files[0];
  }

  //solution 2

  readFile(event) {
    let file = event.target;
    if(file != null) {
      var reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result);
      };
    }
    reader.readAsText(file.value);
  }

}
