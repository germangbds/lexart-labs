import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Client } from '../models/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  API_URI = `${ URL }/api/client`;

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.API_URI}`);
  }
}
