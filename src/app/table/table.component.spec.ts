import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, inject, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Posts } from '../_models/posts';
import { PostsService } from '../_services/posts.service';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let postsService: PostsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ TableComponent ],
      providers: [
        PostsService
      ],
      
    })
    .compileComponents();
    
  });

  beforeEach(inject([PostsService],(s: any)=> {
    postsService=s;
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should call showPosts and return list of posts",fakeAsync(() => {
    const response: Posts[] = [];
  
    spyOn(postsService, 'getPostByday').and.returnValue(of(response))
  
    component.showPosts();
  
    fixture.detectChanges();
  
    expect(component.posts).toEqual(response);
  }));
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
