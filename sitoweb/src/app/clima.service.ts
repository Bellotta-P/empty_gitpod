import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AppSettings } from 'src/appSettings';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http :HttpClient) { }

  getData(){
    return this.http.get(AppSettings._API +"df");
  }

  public addUser(msg : any){
    return this.http.post<any>(AppSettings._API +"usersRec",{msg}).pipe(map((Users: any) => {return Users}))
  }
  
}