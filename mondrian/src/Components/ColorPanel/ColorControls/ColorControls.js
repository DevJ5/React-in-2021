import React from 'react';
import PropTypes from 'prop-types';
import ColorControl from './ColorControl/ColorControl';

const controls = [
  { label: 'Yellow', color: 'yellow' },
  { label: 'Green', color: 'green' },
  { label: 'Blue', color: 'blue' },
  { label: 'Red', color: 'red' },
  { label: 'Black', color: 'black' },
];

const ColorControls = (props) => {
  return (
    <div>
      {controls.map((control) => {
        return (
          <ColorControl
            key={control.label}
            color={control.color}
            label={control.label}
            addSquare={props.addSquare}
            removeSquare={props.removeSquare}></ColorControl>
        );
      })}
    </div>
  );
};

ColorControls.propTypes = {
  addSquare: PropTypes.func.isRequired,
  removeSquare: PropTypes.func.isRequired,
};

export default ColorControls;
