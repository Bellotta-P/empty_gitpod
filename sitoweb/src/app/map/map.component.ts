import { Component, AfterViewInit, Input, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../marker.service';



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

  @Input()
  regione : string = "";
  ngOnChanges(changes: SimpleChanges) {
    this.map.eachLayer((layer : any) => {
      layer.remove();
    });
    this.tiles.addTo(this.map);

    this.initMakrkers();
    };

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 41.9027835, 12.4963655 ],
      zoom: 5
    });
    
    this.tiles.addTo(this.map);
  }
  private initMakrkers(): void {
    if ( this.regione !== "") 
    {
      this.markerService.makeHotelMarkers(this.map,this.regione);
    }
  }
 
  constructor(private markerService : MarkerService) { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}