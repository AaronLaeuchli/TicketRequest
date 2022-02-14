import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes: Routes = [
  { path: 'checkTicket', component: LandingpageComponent },
  { path: 'searchTicket', component: SearchBarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
