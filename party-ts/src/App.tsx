import React, { useState } from 'react';
import './App.css';
import PeopleList from './components/PeopleList';
import PersonForm from './components/PersonForm';

export interface IState {
  people: {
    name: string;
    profileImgUrl?: string;
    age: number;
    note?: string;
  }[];
}

const App = () => {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Max Verstappen',
      profileImgUrl:
        'https://cdn-1.motorsport.com/images/amp/6D1xP5x0/s6/pole-man-max-verstappen-red-bu.jpg',
      age: 35,
      note: 'Im looking forward to the party!',
    },
    {
      name: 'Alex Baldwin',
      profileImgUrl:
        'https://images0.persgroep.net/rcs/WMPYoLH0csAXjzfXlh91e6XwviU/diocontent/63727299/_fill/637/900/?appId=21791a8992982cd8da851550a453bd7f&quality=0.9',
      age: 27,
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <PeopleList people={people} />
      <PersonForm people={people} setPeople={setPeople} />
    </div>
  );
};

export default App;
