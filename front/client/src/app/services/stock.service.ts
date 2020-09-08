import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../models/interfaces';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class StockService {

  API_URI = `${ URL }/api/stock`;

  constructor(private http: HttpClient) { }

  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.API_URI}`);
  }

  getStock(id: number): Observable<Stock> {
    return this.http.get<Stock>(`${this.API_URI}/${id}`);
  }

  deleteStock(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URI}/${id}`);
  }

  saveStock(stock: Stock): Observable<void> {
    return this.http.post<void>(`${this.API_URI}/`, stock);
  }

  updateStock(id: number, stock: Stock): Observable<Stock> {
    return this.http.put(`${this.API_URI}/${id}`, stock);
  }
}
