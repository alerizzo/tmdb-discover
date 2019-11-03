import React from 'react';

const Field = ({ label, children }) => {
  return (
    <div className="Field">
      <label>{label}</label>
      <div>{children}</div>
    </div>
  );
};

export default Field;
