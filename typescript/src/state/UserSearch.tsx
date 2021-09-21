import React, { useState } from 'react';

const users: { name: string; age: number }[] = [
  { name: 'Sarah', age: 26 },
  { name: 'Mike', age: 26 },
  { name: 'Alex', age: 31 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState(''); // Type inference
  const [user, setUser] = useState<{ name: string; age: number } | undefined>(); // Multiple types possible

  const findUser = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={findUser}>Find User</button>
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  );
};

export default UserSearch;
