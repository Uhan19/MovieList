import React from 'react';
import ReactDOM  from 'react-dom';
import { Movie } from './components/Movie.jsx';
import { AddMovie } from './components/AddMovie.jsx';
import { Search } from './components/Search.jsx';
import ToggleButton from 'react-toggle-button';

var movies = [
  {title: 'Mean Girls', description: 'Most quoted movie of all time!'},
  {title: 'Hackers', description: 'A Hack Reactor documentary'},
  {title: 'The Grey', description: 'Liam Neeson fights a wolf'},
  {title: 'Sunshine', description: 'Something SF is missing'},
  {title: 'Ex Machina', description: 'Would rewatch this movie in a heartbeat'},
]

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      searchResults: movies,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(e) {
    // if e is equal to movie 
    var filteredArr = this.state.movies.filter(movie => {
      var target = e.target.value.toLowerCase();
      var title = movie.title.toLowerCase(); 
      return title.startsWith(target);
    });
    console.log(filteredArr)
    this.setState({
      searchResults: filteredArr
    })
  }

  handleSubmit(e) {
    if(e.key === 'Enter') {
      console.log({title: e.target.value})
      const newMoviesList = this.state.movies
      newMoviesList.push({title: e.target.value})
      this.setState({
        movies: newMoviesList 
      });
    }
  }

  render() {
    return (
      <div>
        <AddMovie add={this.handleSubmit} />
        <Search search={this.handleSearch} />
        <ul>
          {this.state.searchResults.map((movie, i) => 
            <Movie key={i} movie={movie} /> 
          )} 
        </ul>
      </div>
    )
  }
}

ReactDOM.render( <MovieList movies={movies}/>, document.getElementById('app'));
