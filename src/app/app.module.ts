import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroeModule } from './Heroes/heroe.module';
import { ContadorModule } from './Contador/contador.module';
import { OnepieceModule } from './onepiece/onepiece.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroeModule,
    ContadorModule,
    OnepieceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }