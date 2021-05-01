import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePikerComponent } from './date-piker/date-piker.component';

const routes: Routes = [
  {
    path: '',component: DatePikerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
