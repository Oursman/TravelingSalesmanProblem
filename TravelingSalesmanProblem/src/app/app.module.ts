import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeoPointTableComponent } from './geo-point-table/geo-point-table.component';
import {GeoSimpleDisplayComponent} from "./geo-simple-display/geo-simple-display.component";
import { GeoPointRowComponent } from './geo-point-row/geo-point-row.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    GeoPointTableComponent,
    GeoSimpleDisplayComponent,
    GeoPointRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
