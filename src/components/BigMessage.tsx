import React, { FunctionComponent } from 'react';

type BigMessageProps = {};

const BigMessage: FunctionComponent<BigMessageProps> = ({ children }) => (
  <div className="BigMessage">{children}</div>
);

export default BigMessage;
