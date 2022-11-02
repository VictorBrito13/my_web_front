import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

interface Offer{
  email: String,
  cellphone: String,
  company: String,
  details: String
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url: string

  constructor(
    private http: HttpClient
  ) {
    this.url = 'http://localhost:3000/api'
  }

  new_offer(offer:Offer):Observable<any>{
    let new_offer = JSON.stringify(offer)
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post(`${this.url}`, new_offer, { headers })
  }
}
