import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SalesResponse } from '../interfaces/sales.interface';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private results: SalesResponse[] = [];

  constructor(private http: HttpClient) { }

  public dataLoaded=false

  getData(){
    this.dataLoaded=false;

    console.log('getting data...')
    this.http.get<SalesResponse[]>('https://fakestoreapi.com/users?limit=10')
    .subscribe(resp => {
      this.results=resp;
      console.log(this.results)
      this.dataLoaded=true;
    })
  }  
  getResults(){
    return [...this.results];
  }
}
