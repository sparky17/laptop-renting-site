import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http: HttpClient) { }

  // The `add` method sends a POST request to the specified URL with the provided data.
  addLaptop(data: any): Observable<any> {
    // Use HttpClient to send a POST request with the provided data
    return this.http.post('http://localhost:3000/api/laptops', data);
  }
  // addLaptop(data:object){

  //   return this.http.post('http://localhost:3000/products',data);
    
  //     }
 
    
}



