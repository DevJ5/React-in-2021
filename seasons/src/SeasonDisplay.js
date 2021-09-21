import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Lets hit the beach!',
    iconName: 'sun',
  },
  winter: {
    text: 'Burr its cold!',
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  console.log(lat, month);
  if (month > 2 && month < 9) {
    lat = lat > 0 ? 'summer' : 'winter';
  } else {
    lat = lat > 0 ? 'winter' : 'summer';
  }
  return lat;
};

class SeasonDisplay extends React.Component {
  componentDidMount() {
    console.log('seasondisplay did mount');
  }
  componentDidUpdate() {
    console.log('seasondisplay update');
  }
  render() {
    console.log('seasondisplay render');
    const season = getSeason(this.props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left ${iconName} massive icon`}></i>
        <h1>{text}</h1>
        <i className={`icon-right ${iconName} massive icon`}></i>
      </div>
    );
  }
}

export default SeasonDisplay;
