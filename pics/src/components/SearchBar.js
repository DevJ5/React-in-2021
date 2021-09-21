import React, { Component } from 'react';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  // handleInputChange or onInputChange is common naming convention
  onInputChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchValue);
  };

  render() {
    return (
      <div className="searchbar">
        <form action="" onSubmit={this.onFormSubmit}>
          <label htmlFor="">Image search</label>
          <input
            type="text"
            className="searchbar__text-input"
            value={this.state.searchValue}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
