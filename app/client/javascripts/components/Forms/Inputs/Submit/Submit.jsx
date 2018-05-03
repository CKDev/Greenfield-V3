import React from 'react';
import './Submit.scss';

export default class Submit extends React.Component {
  render() {
    return (
      <input type='submit' value={ this.props.text } className='Submit'/>
    )
  }
}