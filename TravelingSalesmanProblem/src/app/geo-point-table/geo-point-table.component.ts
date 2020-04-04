import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GeoPoint} from "../interfaces/geopoint";
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';


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


  onTableChange(event: GeoPoint[]){
    let clonedPoint = Object.assign({},event ); // copie superficielle (suffisante ici pour éviter de modifier accidentellement le point)
    this.tableChange.emit(clonedPoint);
  }


  onAddPoint(){
    let clonedPoint = Object.assign({},this.point);
    this.table.push(clonedPoint);
  }

  update(event,t){
    if(event == null) {
      this.table = this.table.filter(item => item != t);
    }
    if(event == 1 || event == -1){
      let i = this.table.indexOf(t);
      [this.table[i],this.table[i+event]] = [this.table[i+event],this.table[i]];
    }
  }

  onSelectAction(option){
    switch (option) {
      case('reset') :
        this.table.map( x => x.selected = false);
        break;
      case('invert'):
        this.table.map( x => x.selected = !x.selected);
        break;
      case('all'):
        this.table.map( x => x.selected = true);
        break;
    }
  }

  drop(event: CdkDragDrop<GeoPoint[]>) {
    moveItemInArray(this.table, event.previousIndex, event.currentIndex);
  }

  getTable() {
    return this.table;
  }

  MajTable($event: GeoPoint[]) {
    for (let i = 0 ; $event[i]!=null ;i++) {
      this.table.push($event[i]);
    }
    this.onTableChange(this.table);
  }
}
