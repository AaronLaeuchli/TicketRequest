import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Tickets } from '../model/tickets'


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/tickets";
  status: any;

  getTickets() {
    return this.http.get<Tickets[]>(this.url);
  }

  getTicketExists(ticketId: number) {
    return this.http.get("https://localhost:5031/api/v1/tib/ticketChange/TicketExists?TicketId=" + ticketId + "&TicketTypeId=1");
  }

  getRBTickets(){
    console.log("get rb tickets");
    
    console.log(this.http.get<Tickets[]>("https://localhost:5031/api/v1/tib/ticketChange/getTickets"));
    
    return this.http.get<Tickets[]>("https://localhost:5031/api/v1/tib/ticketChange/getTickets");
  }

  updateTickets(ticket: Tickets, exists: boolean, ticketList: Tickets[]) {
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

  addTicket(ticketNumber: number, ticketTitle: string, ticketExists: boolean): Observable<any> {
    var ticket = new Tickets(ticketNumber.toString(), ticketTitle, ticketExists)

    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(ticket);

    window.location.reload();
    return this.http.post(this.url, body, { 'headers': headers });
  }

  deleteTicket(ticketNumber: number) {
    console.log("detlete ticketnumber: " + ticketNumber);
    const headers = { 'content-type': 'application/json' }
    return this.http.delete(this.url + '/' + ticketNumber,
      {
        'headers': headers
      }
    )
      .subscribe(
        () => this.status = 'Delete successful');;

  }
}
