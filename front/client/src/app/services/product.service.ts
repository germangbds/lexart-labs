import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../models/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URI = `${ URL }/api/product`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URI}`);
  }
}
