import React, { useEffect, useState } from 'react';
import './App.css';

const URL = 'https://randomuser.me/api/?results=20';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  const fetchRandomUsers = async (transformUsers) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error('Could not fetch random users.');
      const data = await response.json();
      transformUsers(data.results);
    } catch (error) {
      setError(error.message || 'Something went wrong');
    }
    setLoading(false);
  };

  useEffect(() => {
    const transformUsers = (users) => {
      const transformedUsers = users.map((user) => {
        const newUser = {
          fullName: `${user.name.first} ${user.name.last}`,
        };
        console.log(newUser);
        const iterate = (obj) => {
          console.log(obj);
          Object.keys(obj).forEach((key) => {
            const value = obj[key];
            console.log(value);
            if (typeof value === 'object') iterate(value);
            else newUser[key] = value;
          });
        };

        iterate(user.location);
        return newUser;
      });

      setUsers(transformedUsers);
    };

    fetchRandomUsers(transformUsers);
  }, []);

  const renderRandomUsers = () => {
    let usersList = <p>No users found...</p>;

    if (users.length > 0) {
      usersList = users.map((user) => (
        <li>
          <pre>{JSON.stringify(user, null, 4)}</pre>
        </li>
      ));
    }

    let content = usersList;
    if (loading) content = 'Loading users...';
    if (error) content = <button onClick={fetchRandomUsers}>Try again</button>;
    return content;
  };

  return <div className="App">{renderRandomUsers()}</div>;
};

export default App;
