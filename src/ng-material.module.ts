import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const materialModules = [
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule, 
  MatDatepickerModule,
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatTableModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [
    CommonModule,
    materialModules
  ],
  exports: [
    materialModules
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }]
})

export class NgMaterialModule { }