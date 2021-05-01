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
@NgModule({
  declarations: [
    AppComponent,
    DatePikerComponent,
    TableComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    HttpClientModule,
    
  ],
  
  providers:[HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
