import { IMovie } from '../imovie';
import { MoviesService } from './../movies.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
// make the class implement OnInit and make injection for the service (function injection )
export class ContactComponent implements OnInit {
  // make the service private and readonly injection function
   private readonly movieService = inject(MoviesService);
  //  make property to store the data from the api (array of objects) using interface called IMovie
  movies:IMovie[] = [];
  // make  function called (getMoviesData) to get data from the api and subscribe to it and use in in ngOnInit function and any place
getMoviesData():void{
  this.movieService.getMovies().subscribe({
    next:(data) =>{
      // init in variaable to use it in html
      this.movies = data.results; // [{},{},{},{}]
    },
    error:(error) => {
      console.log(error);
    }
  })
}
ngOnInit():void{
  this.getMoviesData();
}

}



