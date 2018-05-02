import React from 'react';
import './FormTitle.scss';

export default class FormTitle extends React.Component {
  render() {
    return (
      <h1 className='FormTitle'>
        { this.props.text }
      </h1>
    )
  }
}