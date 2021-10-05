import './App.css';
import { useState } from 'react';

import LanguageContext from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';
import UserCreate from './components/UserCreate';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const onSelectLanguage = (language) => {
    setSelectedLanguage(language);
  };

  const addFlagClasses = (language) => {
    const classes = [];
    switch (language) {
      case 'english':
        classes.push('flag us');
        break;
      case 'dutch':
        classes.push('flag nl');
        break;
      default:
        break;
    }
    if (selectedLanguage === language) classes.push('flag-active');

    return classes.join(' ');
  };

  return (
    <div className="d-grid">
      <div className="language">Select a language:</div>
      <div className="flag-icons">
        <i
          className={addFlagClasses('english')}
          onClick={() => onSelectLanguage('english')}></i>
        <i
          className={addFlagClasses('dutch')}
          onClick={() => onSelectLanguage('dutch')}></i>
      </div>
      <LanguageContext.Provider value={selectedLanguage}>
        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
