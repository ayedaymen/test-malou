import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from 'src/ng-material.module';
import { HttpClientModule,  } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePikerComponent } from './date-piker/date-piker.component';
import { TableComponent } from './table/table.component';
import { CharteComponent } from './chart/chart.component';

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
