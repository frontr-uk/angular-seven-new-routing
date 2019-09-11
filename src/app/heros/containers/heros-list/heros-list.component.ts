import { Component, OnInit } from '@angular/core';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.scss']
})
export class HerosListComponent implements OnInit {
  public heros: any;
  constructor(private herosService: HerosService) { }

  ngOnInit() {
   this.heros = this.herosService.getHeros();
  }

}
