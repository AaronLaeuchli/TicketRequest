import { Component, OnInit } from '@angular/core';
import { Tickets } from '../model/tickets';
import { TicketService } from '../service/ticket.service';

import { MatTableDataSource } from "@angular/material/table";
import { Router } from '@angular/router';

import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogTicketDetailComponent } from '../dialog-ticket-detail/dialog-ticket-detail.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  tickets: Tickets[] = [];
  title: any;
  id: any;

  public displayedColumns = ['number', 'title', 'exists'];
  public dataSource = new MatTableDataSource<Tickets>();


  constructor(private ticketService: TicketService, private router: Router, public dialog: MatDialog) {}


  ngOnInit(): void {
    console.log("adsf");
    
    this.GetTickets();
  }

  GetTickets() {
    this.ticketService.getTickets().subscribe((response) => {
      console.log(response);

      this.dataSource.data = response;
      this.tickets = response;
      this.TicketExists();
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.number.toLowerCase().includes(filter);
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  SearchTitle() {
    if (this.title == "") {
      this.ngOnInit();

    }
    else {
      this.tickets = this.tickets.filter(f => {
        return f.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });
    }
  }


  SearchId() {
    if (this.id == null) {
      this.ngOnInit();
    }
    else {
      this.tickets = this.tickets.filter(f => {
        return f.number.toString().toLocaleLowerCase().match(this.id.toString().toLocaleLowerCase());
      });
    }
  }

  TicketExists() {
    this.tickets.forEach(element => {
      this.ticketService.getTicketExists(Number(element.number)).subscribe((r) => {
        this.ticketService.updateTickets(element, r.toString(), this.tickets);
      });

    })
  }

  viewTicketDetails(ticket: Tickets) {

      this.dialog.open(DialogTicketDetailComponent, {data: ticket});   
  }


}
