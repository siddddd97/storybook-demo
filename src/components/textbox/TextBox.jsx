import React from 'react';

const textBoxStyle = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const TextBox = ({ width, grayBackground, purpleOutline, ...props }) => {
  const styles = {
    ...textBoxStyle,
    width: width ? '100%' : 'auto',
    background: grayBackground ? '#f0f0f0' : 'transparent',
    borderColor: purpleOutline ? 'purple' : '#ccc',
  };

  return <input type="text" style={styles} {...props} />;
};

export default TextBox;
