import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Tickets } from '../model/tickets'


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/tickets";


  getTickets() {
    return this.http.get<Tickets[]>(this.url);
  }

  getTicketExists(ticketId: number) {
    return this.http.get("https://localhost:5031/api/v1/tib/ticketChange/TicketExists?TicketId=" + ticketId + "&TicketTypeId=1");
  }

  updateTickets(ticket:Tickets, exists:string, ticketList: Tickets[]) {

    if (ticket.id === null) {
      this.http.put<Tickets>("http://localhost:3000/tickets", ticket, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
    } else {
      var foundIndex = ticketList.findIndex(e => e.id === ticket.id);
      ticketList[foundIndex].exists = exists;
    }

  }
}
