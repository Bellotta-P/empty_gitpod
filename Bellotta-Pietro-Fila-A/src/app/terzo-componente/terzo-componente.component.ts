import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terzo-componente',
  templateUrl: './terzo-componente.component.html',
  styleUrls: ['./terzo-componente.component.css']
})
export class TerzoComponenteComponent implements OnInit {
  burzum: string;
  constructor() { 
    this.burzum = "Terzo"
  }
  ngOnInit(): void {
  }

}
