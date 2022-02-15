import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Tickets } from '../model/tickets';
import { TicketService } from '../service/ticket.service';

@Component({
  selector: 'app-dialog-ticket-add',
  templateUrl: './dialog-ticket-add.component.html',
  styleUrls: ['./dialog-ticket-add.component.scss']
})
export class DialogTicketAddComponent implements OnInit {

  public displayedColumns = ['number', 'title', 'exists'];
  public dataSource = new MatTableDataSource<Tickets>();
  ticketNumber:any;
  ticketTitle:any;

  constructor(private formBuilder: FormBuilder, private ticketService: TicketService) {
    this.getRBTickets();
   }

  tickets: Tickets[] | undefined;

  profileForm = this.formBuilder.group({
    ticketNumber: [''],
    ticketTitle: ['']
  })

  ngOnInit(): void {
    this.refreshTickets()
  }

  refreshTickets() {
    this.ticketService.getTickets()
      .subscribe(data => {
        console.log(data)
        this.tickets = data;
      })

  }

  addTicket() {
    var ticketExists = this.ticketService.getTicketExists(this.profileForm.value.ticketNumber);
    this.ticketService.addTicket(this.profileForm.value.ticketNumber, this.profileForm.value.ticketTitle, Boolean(ticketExists)).subscribe(data => {
      console.log(data)
      this.refreshTickets();
    })
  }

  getRBTickets() {
    this.ticketService.getRBTickets().subscribe((response) => {
      console.log(response);
      this.dataSource.data = response;
      this.tickets = response;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.ticketId.toString().toLowerCase().includes(filter);
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  setTicketValues(ticket: Tickets){
    console.log("test");
    console.log(ticket.ticketId);
    
    this.ticketNumber = ticket.ticketId;
    this.ticketTitle = ticket.ticketTitle;

  }
}
