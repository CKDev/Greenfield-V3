import React from 'react';
import './TextExpander.scss';

export default class TextExpander extends React.Component {

  render () {
    return (
      <a href='javascript:void(0)' className='TextExpander' onClick={this.props.onClick}>
        {this.props.triggerText}
      </a>
    )
  }
}