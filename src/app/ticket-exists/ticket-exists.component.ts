import { Component, OnInit } from '@angular/core';
import { TibServiceService } from '../services/tib-service.service';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ticket-exists',
  templateUrl: './ticket-exists.component.html',
  styleUrls: ['./ticket-exists.component.scss']
})
export class TicketExistsComponent implements OnInit {

  profileForm = this.formBuilder.group({
    ticketNumber: [''],
  })

  ticketExists: any;

  constructor(private formBuilder: FormBuilder, private tibService: TibServiceService) { }

  ngOnInit(): void {
  }

  btnTicketExists(){
    this.tibService.getTicketExists(this.profileForm.value.ticketNumber).subscribe((r) => {
      if(r = "false"){
        this.ticketExists = "Ticket existiert nicht"
      }
      else{
        this.ticketExists = "Ticket existiert"
      }
    });
  }

}
