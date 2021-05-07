/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getTestBed, TestBed } from '@angular/core/testing';
import {
    HttpTestingController,
    HttpClientTestingModule}from '@angular/common/http/testing';
import { PostsService } from './posts.service';
describe('PostsService', () => {
    let service: PostsService;
    let injector: TestBed;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [PostsService]
        });
        injector = getTestBed();
        service = injector.get(PostsService);
        httpMock = injector.get(HttpTestingController);
    });
    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('#getPostByday', () => {
        it('should return an Observable<Posts[]>', () => {
            const posts = [
                { id: 1,
                    name :'46aea',
                    votes_count: 42,
                    day:'01-05-2021' },

                {  id: 1,
                    name:'46aea',
                    votes_count: 25,
                    day:'string' }
            ];


            service.getPostByday('01-05-2021').subscribe(p => {
                expect(p).toEqual(posts);
                expect(p.length).toBe(2);

            });

            const req = httpMock.expectOne('https://backend-malou.herokuapp.com/posts/01-05-2021');
            expect(req.request.method).toBe('GET');
            req.flush(posts);
        });
    });
});
