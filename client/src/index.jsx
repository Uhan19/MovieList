import React from 'react';
import ReactDOM  from 'react-dom';
import { Movie } from './components/Movie.jsx';
// import { Search } from './componenets/Search.jsx';

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
    };
    this.handleSearch = this.handleSearch.bind(this);
  };
  handleSearch(e) {
    // if e is equal to movie 
    if (e.key === 'Enter') {
       this.state.movies.map(movie => {
         if (e.target.value === movie.title) {
          this.setState({
            movies: [movie]
          })
        } 
      })
    }
  };
  render() {
    return (
      <div>
        <div>
          <input type="text" onKeyUp={this.handleSearch} placeholder='Tell me what you want'/>
        </div>
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
