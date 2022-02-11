import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


const routes: Routes = [
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'search-bar', component: SearchBarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
