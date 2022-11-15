import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BagStringComponent} from './bag-string/bag-string.component';
import {Pokedex} from "./pokedex";

@NgModule({
  declarations: [
    AppComponent,
    BagStringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Pokedex],
  bootstrap: [AppComponent]
})
export class AppModule {
}
