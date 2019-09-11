import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisibilityDirective } from './visibility.directive';

import { HerosModule } from './heros/heros.module';
import { BanUserModule } from 'projects/ban-user/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    VisibilityDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BanUserModule,
    HerosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
