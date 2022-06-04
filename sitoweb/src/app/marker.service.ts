import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { AppSettings } from 'src/appSettings';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  constructor(private http: HttpClient) { }
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