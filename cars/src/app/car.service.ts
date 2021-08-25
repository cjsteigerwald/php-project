import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Car } from './car';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  baseUrl = 'http://localhost:8888/api';

  constructor(private http: HttpClient) { }
  // get all cars in db
  getAll() {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  } // getAll

  // put car into db
  store(car: Car) {
    return this.http.post(`${this.baseUrl}/store`, {data: car}).pipe(
      map((res: any) => {
        return res['data'];
      })
    );// return
  } // store()

  // update car in db
  update(car: Car) {
    return this.http.put(`${this.baseUrl}/update`, { data: car });
  } //update
  
  delete(id: any) {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/delete`, { params: params });
  } // delete


} // CarService
