import React, { useState } from 'react';

const GuestList: React.FC = () => {
  const [guests, setGuests] = useState<string[]>([]);
  const [name, setName] = useState<string>('');

  const addGuest = () => {
    setGuests([...guests, name]);
    setName('');
  };

  return (
    <div>
      <h3>Guest list</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addGuest}>Add guest</button>
    </div>
  );
};

export default GuestList;
