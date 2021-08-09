import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');

  // useCallback - Add a dependency for when the function should not be memoized.
  // Because setListTitle is never changed, we can leave dependency array empty.
  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  // useMemo to pass the same pointer down to DemoList
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
