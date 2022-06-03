import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
//import { MarkerService } from '../marker.service';
//this.markerService.makeCapitalMarkers(this.map);


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  map : any;
  tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 3,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });
    
    this.tiles.addTo(this.map);
  }
 
  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}