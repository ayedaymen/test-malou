import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../_models/posts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class PostsService {
  API_URL = `https://backend-malou.herokuapp.com/posts/`;
  constructor(private http: HttpClient) { }

  getPostByday(day: string): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.API_URL + `${day}`);
  }
}
