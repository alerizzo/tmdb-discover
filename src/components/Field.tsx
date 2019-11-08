import React, { FunctionComponent } from 'react';

type FieldProps = { label: string };

const Field: FunctionComponent<FieldProps> = ({ label, children }) => {
  return (
    <div className="Field">
      <label>{label}</label>
      <div>{children}</div>
    </div>
  );
};

export default Field;
