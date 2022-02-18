import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Tickets } from 'src/app/model/tickets';

@Injectable({
  providedIn: 'root'
})
export class TibServiceService {

  constructor(private http: HttpClient) { }

  getTicketExists(ticketId: number) {
    return this.http.get("https://localhost:5031/api/v1/tib/ticketChange/TicketExists?TicketId=" + ticketId + "&TicketTypeId=1");
  }

  getRBTickets(){
    console.log("get rb tickets");
    
    console.log(this.http.get<Tickets[]>("https://localhost:5031/api/v1/tib/ticketChange/getTickets"));
    
    return this.http.get<Tickets[]>("https://localhost:5031/api/v1/tib/ticketChange/getTickets");
  }
}
