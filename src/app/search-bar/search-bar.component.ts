import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Tickets } from '../model/tickets';
import { TicketService } from '../service/ticket.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  tickets:Tickets[] = [];

  constructor(private ticketService: TicketService) { }

    
  ngOnInit(): void {
    this.ticketService.getTickets().subscribe((response) => {
      this.tickets = response;
    })
  }

}
