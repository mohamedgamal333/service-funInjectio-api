import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  // logic for api calls and make injection
// inject HttpClient in the constructor that will be used to call the api
  constructor(private http:HttpClient) { }
// make function to get data from the api
// to call data in html go to contactComponent ts  as i need when i open contact component i need to call the api
getMovies():Observable<any>{
  return this.http.get('https://api.themoviedb.org/3/trending/all/day?api_key=48d62e7452a1f1a5e6018217ac27c50a&language=en-US');

}

}
