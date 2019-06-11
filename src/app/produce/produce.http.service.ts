import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Produce } from '../models/produce.model';
import { environment } from '../../environments/environment';

const endpoint = `${environment.api}/produce`;

@Injectable({
  providedIn: 'root'
})
export class ProduceHttpService {

  constructor(private http: HttpClient) { }

  query(query: string): Observable<Produce[]> {
    const queryEndpoint = query ? `${endpoint}/${query}` : endpoint;
    return this.http.get<Produce[]>(queryEndpoint);
  }

  add(item: Produce): Observable<Produce> {
    console.log(item);
    return this.http.post<Produce>(`${endpoint}`, item);
  }

  delete(item: Produce): Observable<Produce> {
    return of(null);
  }
}
