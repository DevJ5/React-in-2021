import React, { Component } from 'react';
import axios from '../api/unsplash';

// components
import SearchBar from './SearchBar';
import ImageList from './ImageList';
// styles
import './App.css';

class App extends Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (term) => {
    const response = await axios.get(`/search/photos`, {
      params: {
        query: term,
      },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="container">
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        <ImageList images={this.state.images}></ImageList>
      </div>
    );
  }
}

export default App;
