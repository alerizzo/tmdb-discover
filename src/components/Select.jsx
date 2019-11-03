import React from 'react';

const Select = ({ field, values }) => (
  <div className="select is-fullwidth">
    <select {...field}>
      {values.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
