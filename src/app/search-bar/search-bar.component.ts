import { Component, OnInit } from '@angular/core';
import { Tickets } from '../model/tickets';

import { MatTableDataSource } from "@angular/material/table";
import { Router } from '@angular/router';

import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogTicketDetailComponent } from '../dialog-ticket-detail/dialog-ticket-detail.component';
import { DialogTicketAddComponent } from '../dialog-ticket-add/dialog-ticket-add.component';
import { TibServiceService } from '../services/tib-service.service';
import { DbServiceService } from '../services/db-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  tickets: Tickets[] = [];
  title: any;
  id: any;
  deleteClicked: boolean = false;

  public displayedColumns = ['number', 'title', 'exists', 'options'];
  public dataSource = new MatTableDataSource<Tickets>();

  constructor(private tibService: TibServiceService, private dbService: DbServiceService, private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.GetTickets();
  }

  GetTickets() {
    this.dbService.getTickets().subscribe((response) => {
      console.log(response);
      this.dataSource.data = response;
      this.tickets = response;
      this.TicketExists();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.ticketId.toLowerCase().includes(filter);
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  SearchTitle() {
    if (this.title == "") {
      this.ngOnInit();

    }
    else {
      this.tickets = this.tickets.filter(f => {
        return f.ticketTitle.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });
    }
  }

  SearchId() {
    if (this.id == null) {
      this.ngOnInit();
    }
    else {
      this.tickets = this.tickets.filter(f => {
        return f.ticketId.toString().toLocaleLowerCase().match(this.id.toString().toLocaleLowerCase());
      });
    }
  }

  TicketExists() {
    this.tickets.forEach(element => {
      this.tibService.getTicketExists(Number(element.ticketId)).subscribe((r) => {
        this.dbService.updateTickets(element, Boolean(r), this.tickets);
      });

    })
  }

  viewTicketDetails(ticket: Tickets) {
    if (!this.deleteClicked) {
      this.dialog.open(DialogTicketDetailComponent, { data: ticket });
    }

  }

  btnAddClick() {
    this.dialog.open(DialogTicketAddComponent);
  }

  btnDeleteClick(ticketNumber: number) {
    this.deleteClicked = true;
    this.dbService.deleteTicket(ticketNumber);
    window.location.reload();

  }
}
