import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  constructor(private http: HttpClient) { }

  getHeros(){
    return this.http.get('https://swapi.co/api/people/1')
  }
}
