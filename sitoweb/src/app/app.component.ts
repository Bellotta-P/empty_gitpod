import { Component } from '@angular/core';
import { ClimaService } from './clima.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg:string | undefined; 
  title = 'sitoweb';
  resp: any;
  
  constructor( private ClimaService: ClimaService) { }

  ngOnInit(): void {
    this.getData();
  }

  clickEventMite(){
    this.msg='Mite';
    return this.msg;
    console.log(this.resp)
  }

  clickEventFreddo(){
    this.msg='Freddo';
    return this.msg;
    console.log(this.resp)
  }

  clickEventCaldo(){
    this.msg='Caldo';
    return this.msg;
    console.log(this.resp)
  }

  clickEventNome_Regione_1(){
    this.msg='Regione_1';
    return this.msg;
    console.log(this.resp)
  }

  clickEventNome_Regione_2(){
    this.msg='Regione_2';
    return this.msg;
    console.log(this.resp)
  }

  clickEventNome_Regione_3(){
    this.msg='Regione_3';
    return this.msg;
    console.log(this.resp)
  }

  clickEventNome_Regione_4(){
    this.msg='Regione_4';
    return this.msg;
    console.log(this.resp)
  }

  
  getData(): void {
		this.ClimaService.getData().subscribe(resp => this.resp = resp);
	}
}

