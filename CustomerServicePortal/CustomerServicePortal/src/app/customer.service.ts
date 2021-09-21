import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private createCustomerUrl = 'http://localhost:8080/customer-api/createCustomer/';

  constructor(private http: HttpClient) { }
 
  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.createCustomerUrl}`, customer);
  }

  
}