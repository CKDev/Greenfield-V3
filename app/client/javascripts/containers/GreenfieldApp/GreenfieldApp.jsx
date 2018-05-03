import React from 'react';
import Form from '../../components/Forms/Form/Form';
import Confirmation from '../../components/Confirmation/Confirmation';
import './GreenfieldApp.scss';

export default class GreenfieldApp extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {submitted: false, data: new FormData()}
  }

  submitForm(data) {
    this.setState({
      submitted: true,
      data: data
    })
  }

  render() {
    return (
      <div className='GreenfieldApp'>
        {this.state.submitted ? (
          <Confirmation
            data={this.state.data}
          />
        ) : (
          <Form onSubmit={ this.submitForm }/>
        )}
      </div>
    );
  }
}