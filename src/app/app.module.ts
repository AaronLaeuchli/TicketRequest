import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DialogTicketDetailComponent } from './dialog-ticket-detail/dialog-ticket-detail.component';
import { DropdownBtnComponent } from './dropdown-btn/dropdown-btn.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DialogTicketAddComponent } from './dialog-ticket-add/dialog-ticket-add.component';
import { TicketExistsComponent } from './ticket-exists/ticket-exists.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ToolbarComponent,
    DialogTicketDetailComponent,
    DropdownBtnComponent,
    LandingpageComponent,
    DialogTicketAddComponent,
    TicketExistsComponent
  ],
  entryComponents: [DialogTicketDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
