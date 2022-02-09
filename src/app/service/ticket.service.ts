import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Tickets } from '../model/tickets'


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }

  url:string = "http://localhost:3000/tickets";
  
  getTickets(){
    return this.http.get<Tickets[]>(this.url);
  }
}
