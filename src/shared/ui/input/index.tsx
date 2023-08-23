import React from 'react';
// Styles
import s from './style.module.css';

export const Input= ({
    label,
  onChange,
  value
}) => (
  <label className={s.label}>
    {label}
    <input
      className={s.input}
      onChange={onChange}
      value={value}
      type="text"
    />
  </label>
);