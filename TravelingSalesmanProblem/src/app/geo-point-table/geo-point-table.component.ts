import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GeoPoint} from "../interfaces/geopoint";
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';
import {LocationFetcherService} from "../location-fetcher.service";
import {LocationGPSService} from "../location-gps.service";
import {GeoPointStorageService} from "../geo-point-storage.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-geo-point-table',
  templateUrl: './geo-point-table.component.html',
  styleUrls: ['./geo-point-table.component.css']
})


export class GeoPointTableComponent implements OnInit {

  @Output() tableChange = new EventEmitter<GeoPoint[]>();
  table: GeoPoint[] = [];
  @Input() point: GeoPoint = {"latitude": 0, "name": "geo-simple-input", "longitude": 0};
  private points: void;
  private serviceSubscription: Subscription;

  constructor(private locationGPSService: LocationGPSService, private storageService: GeoPointStorageService) {
  }

  ngOnInit(): void {
    this.points = this.storageService.loadPoints();
    this.serviceSubscription = this.tableChange.subscribe(change => {

        this.storageService.savePoints(this.points)


    });
  }

  ngOnDestroy() {
    this.serviceSubscription.unsubscribe()
  }


  onTableChange(event: GeoPoint[]) {
    let clonedPoint = Object.assign({}, event); // copie superficielle (suffisante ici pour éviter de modifier accidentellement le point)
    this.tableChange.emit(clonedPoint);
  }


  onAddPoint() {
    let clonedPoint = Object.assign({}, this.point);
    this.table.push(clonedPoint);
  }

  update(event, t) {
    if (event == null) {
      this.table = this.table.filter(item => item != t);
    }
    if (event == 1 || event == -1) {
      let i = this.table.indexOf(t);
      [this.table[i], this.table[i + event]] = [this.table[i + event], this.table[i]];
    }
  }

  onSelectAction(option) {
    switch (option) {
      case('reset') :
        this.table.map(x => x.selected = false);
        break;
      case('invert'):
        this.table.map(x => x.selected = !x.selected);
        break;
      case('all'):
        this.table.map(x => x.selected = true);
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
    for (let i = 0; $event[i] != null; i++) {
      this.table.push($event[i]);
    }
    this.onTableChange(this.table);
  }

  getCurrentPosition() {
    this.locationGPSService.getPosition().then(pos => {
      console.log(`Positon: ${pos.lng} ${pos.lat}`);
      this.point.name = " Current position";
      this.point.longitude = pos.lng;
      this.point.latitude = pos.lat;
    }).catch(e => {
      console.log(e);
    })
  }

  copyListPoints() {
    navigator.clipboard.writeText(JSON.stringify(this.table)).then(function () {
      console.log("sucess")
    }, function () {
      console.log("fail")
    });
  }


}
