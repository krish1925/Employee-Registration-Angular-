import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { APIsService } from './apis.service';

import { AppComponent } from './app.component';
import { EmployeeDashBoardComponent } from './employee-dash-board/employee-dash-board.component';
import { ApiService } from './shared/api.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashBoardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApiService,APIsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
