import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-piker',
  templateUrl: './date-piker.component.html',
  styleUrls: ['./date-piker.component.scss'],

})

export class DatePikerComponent implements OnInit {
  events: string[] = [];
  now = new Date();
  dateEvent = new Date().toLocaleString(
    'ja', { year: 'numeric', month: '2-digit', day: '2-digit' })
    .replace(/\//g, '-');
  selectedDate: Date = new Date();

  ngOnInit(): void {

  }
  addEvent(event: any) {
    this.dateEvent = event.toLocaleString(
      'ja', { year: 'numeric', month: '2-digit', day: '2-digit' })
      .replace(/\//g, '-');
  }
}
