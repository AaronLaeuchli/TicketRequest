import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tickets } from '../model/tickets';

@Component({
  selector: 'app-dialog-ticket-detail',
  templateUrl: './dialog-ticket-detail.component.html',
  styleUrls: ['./dialog-ticket-detail.component.scss']
})
export class DialogTicketDetailComponent implements OnInit {

  tickets;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.tickets = data;
  }

  ngOnInit(): void {
  }
}
