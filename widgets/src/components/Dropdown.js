import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, selectionLabel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      // If our ref contains the clicked item do nothing and let the dropdown handle it.
      if (ref.current.contains(event.target)) return;
      setIsOpen(false);
    };
    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        value={option.value}
        className="item"
        onClick={() => {
          onSelectedChange(option);
        }}>
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label htmlFor="" className="label">
          Select a {selectionLabel}
        </label>
        <div
          className={`ui selection dropdown ${isOpen ? 'visible active' : ''}`}
          onClick={() => {
            console.log('dropdown click');

            setIsOpen(!isOpen);
          }}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${isOpen ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
