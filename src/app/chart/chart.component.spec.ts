import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsService } from '../_services/posts.service';

import { CharteComponent } from './chart.component';

describe('CharteComponent', () => {
  let component: CharteComponent;
  let fixture: ComponentFixture<CharteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({  imports: [HttpClientTestingModule],
      declarations: [ CharteComponent ],
      providers: [ PostsService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
