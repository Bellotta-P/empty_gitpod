import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { AppSettings } from 'src/appSettings';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = 'assets/data/Mappa-degli-hotel-in-Italia_1.json'; 
  constructor(private http: HttpClient) { }
  makeCapitalMarkers(map: L.Map): void { 
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);
        
        marker.addTo(map);
      }
    });
  }
  makeHotelMarkers(map: L.Map, Regione : any): void { 
    this.http.get( AppSettings._API +"hotel/" + Regione).subscribe((res: any) => {
      for (const c of res) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const circle = L.circleMarker([lat, lon]);
      
      circle.addTo(map);
      }
    });
  }
}