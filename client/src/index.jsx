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
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.movie.map((movie) => 
            <Movie movie={movie} />
          )} 
        </ul>
      </div>
    )
  }
}

ReactDOM.render( <MovieList movie={movies}/>, document.getElementById('app'));
