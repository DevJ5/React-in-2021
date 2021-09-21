import React, { Component } from 'react';
import axios, { baseParams } from './api/youtube';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onTermSubmit('cats');
  }

  onTermSubmit = async (term) => {
    const response = await axios.get('/search', {
      params: { ...baseParams, q: term },
    });
    const videos = response.data.items;
    this.setState({ videos, selectedVideo: videos[0] });
  };

  onVideoSelect = (video) => {
    console.log('From the app', video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="main-content">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
