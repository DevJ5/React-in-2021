import React, { Component } from 'react';

export class SearchBar extends Component {
  state = {
    term: '',
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log('yes');
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="searchbar">
        <form className="searchbar__form" onSubmit={this.onFormSubmit}>
          <label htmlFor="">Video Search</label>
          <input
            type="text"
            className="searchbar__input-field"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
