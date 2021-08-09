import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items } = props;

  // Memoize the sorted array, unless items is changed, then sort again:
  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// React.memo checks: Only if props changed, reevaluate component.
// IMPORTANT: pointers like objects and functions will be new pointers, so this only works for primitive values.
// For function pointers we use 'useCallback'.
// For objects/arrays we use 'useMemo'.

// It comes with its own performance cost of reevaulating props. High level parent components
// are good, because then all of their children won't get reevaluated.
export default React.memo(DemoList);
