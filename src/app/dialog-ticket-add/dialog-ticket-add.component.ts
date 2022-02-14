import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Tickets } from '../model/tickets';
import { TicketService } from '../service/ticket.service';

@Component({
  selector: 'app-dialog-ticket-add',
  templateUrl: './dialog-ticket-add.component.html',
  styleUrls: ['./dialog-ticket-add.component.scss']
})
export class DialogTicketAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private ticketService: TicketService) { }

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
}
