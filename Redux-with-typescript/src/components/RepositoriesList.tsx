import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();

  // UseSelector doesnt work with typescript, so we have to create our own typed one:
  const state = useTypedSelector((state) => state.repositories);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // This is the shorthand dispatch, made in the useActions hook:
    searchRepositories(term);
  };

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      {state.error && <h3>{state.error}</h3>}
      {state.loading && <h3>Loading...</h3>}
      {!state.error &&
        !state.loading &&
        state.data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
