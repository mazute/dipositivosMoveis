import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfprComponent } from './ifpr/ifpr.component';
import { TadsComponent } from './tads/tads.component';
import { ClienteModule } from './cliente/cliente.module';

@NgModule({
  declarations: [
    AppComponent, IfprComponent, TadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
