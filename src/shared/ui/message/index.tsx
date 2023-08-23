import React from 'react';
// Styles
import s from './style.module.css';

export const Message = ({ children }) => (
  <p className={s.message}>{children}</p>
);