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
  private url_dev:string

  constructor(
    private http: HttpClient
  ) {
    this.url = 'https://myappserver-production.up.railway.app/api/new_offer'
    this.url_dev = 'http://localhost:31416/api/new_offer'
  }

  new_offer(offer:Offer):Observable<any>{
    let new_offer = JSON.stringify(offer)
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post(this.url, new_offer, { headers })
  }
}
