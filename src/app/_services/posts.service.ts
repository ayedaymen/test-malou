import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../_models/posts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  
})
export class PostsService { 
  constructor(private http: HttpClient) { }
  API_URL = `http://localhost:3000/posts/`;
  getPostByday(day:string): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.API_URL+`${day}`);
  }
}
