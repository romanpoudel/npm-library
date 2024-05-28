import React from 'react';
import './Button.css';

export interface ButtonProps {
  label: string;
  icon: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}{props.icon}</button>;
};

export default Button;
