import React from 'react';
import style from './example.scss';

const Example = ({ children }) => (
  <div className={style.wrapper}>{children}</div>
);

export default Example;
