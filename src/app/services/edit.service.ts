import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  // URL="http://localhost:3000/api.laptops"
  constructor(private _http: HttpClient) {}

  getCurrentData(id: any):Observable<any>{
    return this._http.get(`http://localhost:3000/api/laptops/${id}`)

  }

  updateData(id:any,editData:any):Observable<any>{
    return this._http.put(`http://localhost:3000/api/laptops/${id}`,editData)

  }
  
}

