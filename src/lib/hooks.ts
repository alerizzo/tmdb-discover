import React, { useState } from 'react';

export function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: InputEvent) {
    setValue((<HTMLInputElement>e.target).value);
  }

  return {
    value,
    onChange: handleChange,
  };
}
