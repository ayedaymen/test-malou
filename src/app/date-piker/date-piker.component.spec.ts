import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharteComponent } from '../chart/chart.component';
import { TableComponent } from '../table/table.component';
import { DatePikerComponent } from './date-piker.component';

describe('DatePikerComponent', () => {
    let component: DatePikerComponent;
    let fixture: ComponentFixture<DatePikerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],

            declarations: [DatePikerComponent,TableComponent,CharteComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DatePikerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
