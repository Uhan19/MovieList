import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from 'react-checkbox';


export class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDescription: false,
            haveWatched: false
        }
        this.handleDescription = this.handleDescription.bind(this);
        this.handleWatch = this.handleWatch.bind(this);
    }

    handleDescription(e) {
        const description = this.state.showDescription;
        this.setState({
          showDescription: !description
        })
    }

    handleWatch(e) {
        const watched = this.state.haveWatched;
        this.setState({
          haveWatched: !watched
        })
    }

    render() {
        return (
          <div>
            <li onClick={this.handleDescription}>{this.props.movie.title}, {this.state.showDescription? <b>{this.props.movie.description}</b> : null}</li>
            <input type="checkbox" value='watch' onClick={this.handleWatch}/><i>Watched</i>
         </div>
        )
    }
}