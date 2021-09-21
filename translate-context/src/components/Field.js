import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

const Field = () => {
  return (
    <div className="ui field">
      <label htmlFor="">
        <LanguageContext.Consumer>
          {(language) => (language === 'english' ? 'Name' : 'Naam')}
        </LanguageContext.Consumer>
      </label>
      <input type="text" />
    </div>
  );
};

export default Field;
