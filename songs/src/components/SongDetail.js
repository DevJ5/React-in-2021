import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  let content = 'No song selected.';
  if (selectedSong)
    content = (
      <div>
        <h3>Details for:</h3>
        <p>
          Title: {selectedSong.title}
          <br />
          Duration: {selectedSong.duration}
        </p>
      </div>
    );

  return content;
};

const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
