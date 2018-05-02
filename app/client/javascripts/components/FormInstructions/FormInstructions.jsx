import React from 'react';
import TextExpander from '../TextExpander/TextExpander';
import './FormInstructions.scss';

export default class FormInstructions extends React.Component {
  truncateLength = 200;

  constructor(props) {
    super(props);
    this.setInitialState();
    this.toggleExpand= this.toggleExpand.bind(this);
  }

  setInitialState() {
    this.state = {
      expanded: false,
      expanderText: 'read more...'
    };
  }

  toggleExpand() {
    this.setState(prevState => ({
      expanded: !prevState.expanded,
      expanderText: prevState.expanded ? 'read more...' : 'read less...'
    }));
  }

  displayText() {
    return this.state.expanded ? this.props.body : this.props.body.substring(0, this.truncateLength) + '...';
  }

  render() {
    return (
      <div className='FormInstructions'>
        <div className='top'>
          <div className='heading'>
            { this.props.heading }
          </div>
          <TextExpander
            onClick={ this.toggleExpand }
            triggerText={ this.state.expanderText }
          />
        </div>
        <p className='body'>
          { this.displayText() }
        </p>
      </div>
    );
  }
}