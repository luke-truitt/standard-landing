import React from 'react';
import { Button } from 'antd';

export default function Header(props) {
  return (
    <header {...props}>
      <a className="logo-wrapper">
        <i className="logo" />
        <span>Eighth Fund</span>
      </a>
    </header>
  );
}
