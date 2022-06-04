import { Component } from '@angular/core';
import { ClimaService } from './clima.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg: string = "";
  msg2: string = "";
  title = 'sitoweb';
  resp: any;
  resp2: any;
  reg0: any;
  reg1: any;
  reg2: any;
  reg3: any;
  
  
  constructor( private ClimaService: ClimaService) { }

  ngOnInit(): void {
    
  }

  clickEventMite(){
    this.msg='Mite';
    this.getData();
    this.reg0 = this.resp[0]
    this.reg1 = this.resp[1]
    this.reg2 = this.resp[2]
    this.reg3 = this.resp[3]
    console.log( this.reg0.DEN_REG)

    return this.msg;
    console.log(this.resp)
  }

  clickEventFreddo(){
    this.msg='Freddo';
    this.getData();
    this.reg0 = this.resp[0]
    this.reg1 = this.resp[1]
    this.reg2 = this.resp[2]
    this.reg3 = this.resp[3]
    console.log( this.reg0.DEN_REG)
    
    return this.msg;
    console.log(this.resp)
  }

  clickEventCaldo(){
    this.msg='Caldo';
    this.getData();
    this.reg0 = this.resp[0]
    this.reg1 = this.resp[1]
    this.reg2 = this.resp[2]
    this.reg3 = this.resp[3]
    console.log( this.reg0.DEN_REG)
    
    return this.msg;
    console.log(this.resp)
  }

  clickEventNome_Regione_1(){
    this.msg2 = this.reg0.DEN_REG;
    console.log(this.resp2)
    return this.msg2;
    
  }

  clickEventNome_Regione_2(){
    this.msg2 = this.reg1.DEN_REG;
    return this.msg2;
    console.log(this.resp)
  }

  clickEventNome_Regione_3(){
    this.msg2 = this.reg2.DEN_REG;
    return this.msg2;
    console.log(this.resp)
  }

  clickEventNome_Regione_4(){
    this.msg2 = this.reg3.DEN_REG;
    return this.msg2;
    console.log(this.resp)
  }

  
  getData(): void {
		this.ClimaService.getData(this.msg).subscribe(resp => this.resp = resp);
	}
}

