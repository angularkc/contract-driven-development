import { Injectable } from '@angular/core';
import {of} from 'rxjs/internal/observable/of';
import {delay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Produce } from '../models/produce.model';

const url = '/api/v1/produce';
const delayTime = 300;

@Injectable({
  providedIn: 'root'
})
export class ProduceHttpService {

  constructor(private http: HttpClient) { }

  query(query: string): Observable<Produce[]> {
    //============ Remove this ============//
    let value = 0;
    const result = [];
    for (value; value < 11; value++) {
      result.push(value);
    }
    return of(result).pipe(delay(delayTime));
    //============ End: Remove this ============//

    //============ Your code below ============//
    // return this.http.get(`${url}/`)
  }

  add(item: Produce): Observable<Produce> {
    //============ Remove this ============//
    return of({}).pipe(delay(delayTime));
    //============ End: Remove this ============//

    //============ Your code below ============//
    // return this.http.get(`${url}/`)
  }
}
