import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePikerComponent } from './date-piker/date-piker.component';
import { TableComponent } from './table/table.component';
import { NgMaterialModule } from 'src/ng-material.module';
import { HttpClientModule,  } from '@angular/common/http';
import { CharteComponent } from './chart/chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    DatePikerComponent,
    TableComponent,
    CharteComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  
  providers:[HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
