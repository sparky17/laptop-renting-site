import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProduct() {
    // Send an HTTP GET request to "http://localhost:3000/api/laptops/"
    return this.http.get("http://localhost:3000/api/laptops/").pipe(
      // Map the response using the 'map' operator
      map((res: any) => {
        // Return the response as is
        return res;
      })
    );
  }
  deleteData(id:any){
    return this.http.delete(`http://localhost:3000/api/laptops/${id}`,)
  }
  }

