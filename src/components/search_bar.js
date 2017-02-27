//user types input, display list of results
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // the "state" object is created with super(props) and in there we are
    // saving a new key:value pair for "term" which is the value the user inputs
    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
    </div>
    );
}
}

export default SearchBar;
