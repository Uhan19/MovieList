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
]

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      searchResults: this.props.movies
    };
    this.handleSearch = this.handleSearch.bind(this);
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
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleSearch} placeholder='Tell me what you want'/>
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
