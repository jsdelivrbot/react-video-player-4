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
      <div className="search-bar">
        <input onChange={event => this.onInputChange(event.target.value)} />
    </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
