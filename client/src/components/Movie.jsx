import React from 'react';
import ReactDOM from 'react-dom';

export class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDescription: false
        }
        this.handleDescription = this.handleDescription.bind(this)
    }

    handleDescription(e) {
        const description = this.state.showDescription;
        this.setState({
          showDescription: !description
        })
      }

    render() {
        return (
          <li onClick={this.handleDescription}>{this.props.movie.title}, {this.state.showDescription? <a>{this.props.movie.description}</a> : null}</li>
        )
    }
}