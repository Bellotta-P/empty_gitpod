import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quarto-componente',
  templateUrl: './quarto-componente.component.html',
  styleUrls: ['./quarto-componente.component.css']
})
export class QuartoComponenteComponent implements OnInit {
  burzum: string;
  constructor() { 
    this.burzum = "Quarto"
  }

  ngOnInit(): void {
  }

}
