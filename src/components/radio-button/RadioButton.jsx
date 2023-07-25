import React from 'react';

const radioButtonStyle = {
  margin: '8px',
  display: 'flex',
  alignItems: 'center',
};

const RadioButton = ({ shape, multipleSelect, label, ...props }) => {
  return (
    <label style={radioButtonStyle}>
      <input type={multipleSelect ? 'checkbox' : 'radio'} {...props} />
      {shape === 'round' ? (
        <div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: '#ccc',
            display: 'inline-block',
            marginLeft: '8px',
          }}
        ></div>
      ) : (
        <div
          style={{
            width: '20px',
            height: '20px',
            border: '1px solid #ccc',
            display: 'inline-block',
            marginLeft: '8px',
          }}
        ></div>
      )}
      {label && <span style={{ marginLeft: '8px' }}>{label}</span>}
    </label>
  );
};

export default RadioButton;
