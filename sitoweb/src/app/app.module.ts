import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClimaService } from './clima.service';
import { MapComponent } from './map/map.component';
import { MarkerService } from './marker.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [ClimaService,MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
