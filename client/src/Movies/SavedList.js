import React, { Component } from 'react';
import { withRouter } from "react-router";

class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  navigateToHome = e => {
    e.preventDefault();
    this.props.history.push('/');
    
  };


  render() {
    console.log(this.props.history)
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        <div className="home-button" onClick={this.navigateToHome}>Home</div>
      </div>
    );
  }
}

export default withRouter(SavedList)