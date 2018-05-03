import React from 'react';
import './TextField.scss';

export default class SignUpForm extends React.Component {
  render() {
    return (
      <div className='TextField'>
        <label>{this.props.label}</label>
        <input type="text" />
      </div>
    )
  }
}