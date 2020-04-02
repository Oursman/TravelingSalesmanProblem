import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {GeoPoint} from "../interfaces/geopoint";
import {GeoPointsResponse, LocationFetcherService} from "../location-fetcher.service";

@Component({
  selector: 'tr [point] [position] [size]',
  templateUrl: './geo-point-row.component.html',
  styleUrls: ['./geo-point-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeoPointRowComponent implements OnInit {
  @Input() point: GeoPoint;
  @Input() position:number;
  @Input() size:number;
  @Output() pointChange = new EventEmitter<GeoPoint>();
  @Output() pointMigration = new EventEmitter<number|null>();
  private latitudeValue: number;
  private nameValue: string;
  private longitudeValue: number;

  @Input() placeProposals: Promise<GeoPointsResponse>;
  @Input() typedPlace: string;
  private limit: number = 100;
  private updateTimeoutHandle;
  private pointSelected: string;

  constructor(private locationFetcherService: LocationFetcherService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onDelete(){
    this.pointMigration.emit(null);
  }

  onPointChange(event){
    if(event.target != undefined){
      let clonedPoint = Object.assign({},event.target.value); // copie superficielle (suffisante ici pour éviter de modifier accidentellement le point)
      this.pointChange.emit(clonedPoint);
    }
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

  onSelectedChange(event) {
    console.log(event.target.value);
    console.log((event.target.value == 'on'));
    this.point.selected = (event.target.value == 'on');
    this.onPointChange(this.point);
  }

  onMove(direction){
    if(direction == 'up'){
      this.pointMigration.emit(-1);
    }
    else if(direction == 'down'){
      this.pointMigration.emit(1);
    }
  }

  enableStatus(direction){
    if(direction == 'down'){
      return (this.position == (this.size-1));
    }
    else if(direction =='up'){
      return(this.position == 0);
    }
    return false;
  }

  checkedStatus(){
    if(this.point.selected != null){
      return this.point.selected;
    }
    this.point.selected = false;
    this.onPointChange(this.point);
    return false;
  }

  private _evalCounter: number = 0;

  get evalCounter() {
    return this._evalCounter++;
  }

  onTypedPlaceUpdate(event) {
    this.typedPlace= event.target.value;

    clearTimeout(this.updateTimeoutHandle);
    this.updateTimeoutHandle = setTimeout(() => {this.placeProposals = this.locationFetcherService.fetchGeoPoints(this.typedPlace, this.limit); this.ref.detectChanges(); },1000);
  }

  selectPoint(point: GeoPoint) {
    this.pointSelected = point.name;
    if(this.pointSelected == this.typedPlace){
      this.point = point;
      let clonedPoint = Object.assign({}, point);
      this.pointChange.emit(clonedPoint);
    }
  }

}
