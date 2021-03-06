import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeoPointTableComponent } from './geo-point-table/geo-point-table.component';
import { GeoPointRowComponent } from './geo-point-row/geo-point-row.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {HttpClientModule} from '@angular/common/http';
import { PointsImporterComponent } from './points-importer/points-importer.component';
import { GeoMapComponent } from './geo-map/geo-map.component';
import { TSPComputerComponent } from './tspcomputer/tspcomputer.component';

@NgModule({
  declarations: [
    AppComponent,
    GeoPointTableComponent,
    GeoPointRowComponent,
    GeoMapComponent,
    PointsImporterComponent,
    TSPComputerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
