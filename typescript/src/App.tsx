import React from 'react';
import Parent from './props/parent';
import './App.css';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';

function App() {
  return (
    <div className="App">
      <Parent>Submit</Parent>
      <GuestList></GuestList>
      <UserSearch></UserSearch>
      <EventComponent />
    </div>
  );
}

export default App;
