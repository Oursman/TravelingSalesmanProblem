import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeoPointTableComponent } from './geo-point-table/geo-point-table.component';
import {GeoSimpleDisplayComponent} from "./geo-simple-display/geo-simple-display.component";

@NgModule({
  declarations: [
    AppComponent,
    GeoPointTableComponent,
    GeoSimpleDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
