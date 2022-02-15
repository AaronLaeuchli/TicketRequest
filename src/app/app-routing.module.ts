import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TicketExistsComponent } from './ticket-exists/ticket-exists.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'checkTicket', component: TicketExistsComponent },
  { path: 'searchTicket', component: SearchBarComponent },
  { path: 'landingPage', component: LandingpageComponent },
  { path: 'landingPage/checkTicket', component: TicketExistsComponent },
  { path: 'landingPage/searchTicket', component: SearchBarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

