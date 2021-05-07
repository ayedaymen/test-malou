import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, inject, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Posts } from '../_models/posts';
import { PostsService } from '../_services/posts.service';

import { CharteComponent } from './chart.component';

describe('CharteComponent', () => {
    let component: CharteComponent;
    let fixture: ComponentFixture<CharteComponent>;
    let postsService: any;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [CharteComponent],
            providers: [PostsService],
        })
            .compileComponents();
    }));



    beforeEach(inject([PostsService], () => {
        fixture = TestBed.createComponent(CharteComponent);
        component = fixture.componentInstance;
        component.isValid = true;
        component.sometable = 14;

        fixture.detectChanges();
    }));


    it('should call showPosts and return list of posts', fakeAsync(() => {
        const response: Posts[] = [];

        spyOn(postsService, 'getPostByday').and.returnValue(of(response));

        component.showPosts();

        fixture.detectChanges();

        expect(component.posts).toEqual(response);
    }));

    it('isValid shoul be false', fakeAsync(() => {
        const response: Posts[] = [];

        spyOn(postsService, 'getPostByday').and.returnValue(of(response));
        component.sometable = 0;
        component.showPosts();
        fixture.detectChanges();
        expect(component.isValid).toBe(false);
    }));

    it('isValid shoul be truthy', fakeAsync(() => {
        const response: Posts[] = [];
        spyOn(postsService, 'getPostByday').and.returnValues(of(response));
        component.sometable = 14;
        fixture.detectChanges();
        expect(component.isValid).toBe(true);
    }));


    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
