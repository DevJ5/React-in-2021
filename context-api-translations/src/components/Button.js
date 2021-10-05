import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

function Button() {
  // For class based components its necessary to do
  // static contextType = LanguageContext
  // and then use this.context === 'english' ? 'Submit' : 'Voorleggen'

  console.log(useContext(LanguageContext));
  return (
    <ColorContext.Consumer>
      {(color) => (
        <button className={`ui button ${color}`}>
          <LanguageContext.Consumer>
            {(language) => (language === 'english' ? 'Submit' : 'Voorleggen')}
          </LanguageContext.Consumer>
        </button>
      )}
    </ColorContext.Consumer>
  );
}

export default Button;
