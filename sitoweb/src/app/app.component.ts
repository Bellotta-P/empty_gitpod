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

  getData(): void {
		this.ClimaService.getData().subscribe(resp => this.resp = resp);
	}
}

