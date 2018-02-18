import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios'
import { Movie } from "./components/Movie.jsx";
import { AddMovie } from "./components/AddMovie.jsx";
import { Search } from "./components/Search.jsx";
import ToggleButton from "react-toggle-button";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchResults: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get('/load') // this will load all movies in the DB
      .then(res => {
        this.setState({
          movies: res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSearch(e) { // currently, this is being set to onchange, might need to change it to onkeyup to deal
                    // with the asyncronocity of the get request to DB.
    // if e is equal to movie
    axios
    .get('movies', {title: e.target.value}) // this will query the DB for the movie's title that the user types
    .then(res => {
      this.setState({
        movies: res.data
      })
    })
    .catch(err => {
      console.log(err);
    })
    // below is the solution for the hard data
    var filteredArr = this.state.movies.filter(movie => {
      var target = e.target.value.toLowerCase();
      var title = movie.title.toLowerCase();
      return title.startsWith(target);
    });
    this.setState({
      searchResults: filteredArr
    });
  }

  handleSubmit(e) {
    if (e.key === "Enter") {
      console.log({ title: e.target.value });
      axios
      .post('/movies', {title: e.target.value})
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      })
      // const newMoviesList = this.state.movies;
      // newMoviesList.push({ title: e.target.value });
      // this.setState({
      //   movies: newMoviesList
      // });
    }
  }

  render() {
    return (
      <div>
        <AddMovie add={this.handleSubmit} />
        <Search search={this.handleSearch} />
        <ul>
          {this.state.searchResults.map((movie, i) => (
            <Movie key={i} movie={movie} />
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<MovieList />, document.getElementById("app"));
