import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondoComponenteComponent } from './secondo-componente/secondo-componente.component';
import { TerzoComponenteComponent } from './terzo-componente/terzo-componente.component';
import { QuartoComponenteComponent } from './quarto-componente/quarto-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondoComponenteComponent,
    TerzoComponenteComponent,
    QuartoComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
