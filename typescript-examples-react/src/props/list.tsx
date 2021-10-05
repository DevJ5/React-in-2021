import React, { ReactNode } from 'react';

const List = <T,>({
  items,
  render,
}: {
  items: T[];
  render: (item: T) => ReactNode;
}) => {
  type dog = { age: number; woof: Function };
  type cat = { age: number; meow: Function };

  // Type weird is an intersection of cat and dog
  // it needs to have all properties of them combined
  type weird = dog & cat;

  const weirdAnimal: weird = {
    age: 2,
    woof: () => {
      'woof';
    },
    meow: () => {
      'meow';
    },
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default List;
