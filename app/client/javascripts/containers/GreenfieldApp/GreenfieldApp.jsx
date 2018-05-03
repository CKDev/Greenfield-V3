import React from 'react';
import { connect } from "react-redux";
import Form from '../../components/Forms/Form/Form';
import Confirmation from '../../components/Confirmation/Confirmation';
import './GreenfieldApp.scss';

class GreenfieldApp extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {};
  }


  submitForm(data) {
    this.setState({
      submitted: true,
      data: data
    });
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='GreenfieldApp'>
        { this.state.submitted ? (
          <Confirmation
            data={ this.state.data }
          />
        ) : (
          <Form onSubmit={ this.submitForm }/>
        ) }
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {state};
};

export default connect(mapStateToProps)(GreenfieldApp);


