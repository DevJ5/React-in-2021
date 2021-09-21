import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework.',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers.',
  },
  {
    title: 'How do you use React',
    content: 'You use React by creating components.',
  },
];

const options = [
  { label: 'the color red', value: 'red' },
  { label: 'the color green', value: 'green' },
  { label: 'a shade of blue', value: 'blue' },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  const showAccordion = () => {
    if (window.location.pathname === '/') {
      return <Accordion items={items} />;
    }
  };

  const showList = () => {
    if (window.location.pathname === '/list') {
      return;
    }
  };

  const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
      return <Dropdown />;
    }
  };

  const showTranslate = () => {
    if (window.location.pathname === '/translate') {
      return <Translate />;
    }
  };

  return (
    <div>
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button> */}
      {/* <Search /> */}
      {/* {showDropdown ? (
        <Dropdown
          selected={selected}
          options={options}
          onSelectedChange={setSelected}
          selectionLabel='color'
        />
      ) : null} */}
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          selected={selected}
          options={options}
          onSelectedChange={setSelected}
          selectionLabel="color"
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
