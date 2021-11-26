import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondo-componente',
  templateUrl: './secondo-componente.component.html',
  styleUrls: ['./secondo-componente.component.css']
})
export class SecondoComponenteComponent implements OnInit {
  burzum: string;
  constructor() { 
    this.burzum = "Secondo"
  }
    
  ngOnInit(): void {
  }

}
