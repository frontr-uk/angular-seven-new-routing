import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosListComponent } from './containers/heros-list/heros-list.component';
import { HerosService } from './services/heros.service';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './component/hero/hero.component';

@NgModule({
  declarations: [HerosListComponent, HeroComponent],
  exports: [HerosListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [HerosService]
})
export class HerosModule { }
