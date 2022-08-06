import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService { 

  url='https://api.themoviedb.org/3/movie/popular?api_key=2d75551abc1251658731e13fb6a090c4'
   
  constructor(private http:HttpClient) { }

  getMovies():Observable<any>{
    //observable
   return this.http.get<any>(this.url);
  }
}
