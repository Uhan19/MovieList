import React from 'react';
import ReactDOM  from 'react-dom';
import { Movie } from './components/Movie.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies 
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.movies.map((movie, i) => 
            <Movie key = {i} movie={movie} />
          )} 
        </ul>
      </div>
    )
  }
}

ReactDOM.render( <MovieList movies={movies}/>, document.getElementById('app'));
