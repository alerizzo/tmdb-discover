import React, { FunctionComponent, ChangeEvent } from 'react';

type SelectProps = {
  field: { value: string; onChange: ChangeEvent<HTMLSelectElement> };
  values: string[];
};

const Select: FunctionComponent<SelectProps> = ({ field, values }) => (
  <div className="select is-fullwidth">
    {/* <select {...field}> */}
    <select value={field.value} onChange={field.onChange}>
      {values.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  </div>
);

export default Select;

15 6431 8327