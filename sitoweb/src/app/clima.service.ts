import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AppSettings } from 'src/appSettings';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http :HttpClient) { }

  getData(Clima : any){
    return this.http.get(AppSettings._API +"climaRegioni/" + Clima);
  }
  
}
