import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg:string | undefined; 
  title = 'sitoweb';
  
  
  clickEventMite(){
    this.msg='Mite';
    return this.msg;
  }
}
