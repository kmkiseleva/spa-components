import React, { FC } from 'react';
import { IMallProductCardLabel } from './IMallProductCardLabel';
import './MallProductCardLabel.css';

const MallProductCardLabel: FC<IMallProductCardLabel> = ({ label }) => {
  return (
    <p
      className={label.name === 'new' ? 'labels__new' : label.name === 'discount' ? 'labels__discount' : 'labels__hit'}
    >
      {label.value}
    </p>
  );
};

export default MallProductCardLabel;
