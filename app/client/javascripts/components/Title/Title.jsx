import React from 'react';
import './Title.scss';

export default class Title extends React.Component {
  render() {
    return (
      <h1 className='Title'>
        { this.props.text }
      </h1>
    )
  }
}