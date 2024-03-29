import React from 'react';
import styles from './ColorPicker.module.css';

const ColorPicker = (props) => (
  <div>
    {props.colors.map((color, idx) =>
      <button
        color={color}
        key={color}
        className={styles.button}
        style={{
          backgroundColor: props.selColorIdx === idx ? 'white' : color,
          borderColor: color
        }}
        onClick={() => props.handleColorSelection(idx)}
      />
    )}
  </div>
);

export default ColorPicker;
