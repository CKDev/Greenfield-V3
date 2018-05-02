import React from 'react';
import './Subtitle.scss';

export default class Subtitle extends React.Component {
  render() {
    return (
      <div className='Subtitle'>
        { this.props.text }
      </div>
    )
  }
}