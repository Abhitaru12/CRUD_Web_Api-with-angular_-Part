import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private apiUrl = 'https://localhost:7059/api/Product';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
  getProduct(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, product);
  }

  // updateProduct(id: number, product: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/${id}`, product);
  // }

  updateProduct( id : number , product : Product) : Observable<Product>  {
    const url = `${this.apiUrl}/${id}`
    return this.http.put<Product>(url, product)
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
