import React from 'react';
// Styles
import s from './style.module.css';

export const ChatBlock = ({ children }) => (
  <div className={s.output}>{children}</div>
);