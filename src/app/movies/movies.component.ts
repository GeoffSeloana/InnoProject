/*

*/
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
// import { fakeMovies } from '../fake-movies';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  private selectedMovie: Movie;
  movie: Movie = {
    id: 1,
    name: 'Star Wars',
    releaseYear: 1977
  };

  constructor(private movieService: MovieService) {
  }
  getMoviesFromServices(): void {
    // this.movies = this.movieService.getMovies();
    this.movieService.getMovies().subscribe(updatedMovies => this.movies = updatedMovies);
  }
  ngOnInit() {
    this.getMoviesFromServices();
  }
  // Action when select a Movie in List item


  public setName(name: String, surname: String): void {
    console.log('name' + name + ' surname: ' + surname);
  }

  onSelect(movie: Movie): void {
      this.selectedMovie = movie;
      console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
      // alert(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  }

}
