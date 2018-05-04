import React from 'react';
import { connect } from "react-redux";
import { submitForm } from "../../actions/SumbitForm";
import store from "../../store";
import Form from '../../components/Forms/Form/Form';
import Confirmation from '../../components/Confirmation/Confirmation';
import './GreenfieldApp.scss';

class GreenfieldApp extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }


  submit(data) {
    store.dispatch(submitForm(
      {
        formSubmitted: true,
        formData: data
      }
    ));
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='GreenfieldApp'>
        { store.getState().formSubmitted ? (
          <Confirmation
            data={ store.getState().formData }
          />
        ) : (
          <Form onSubmit={ this.submit }/>
        ) }
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {state};
};

export default connect(mapStateToProps)(GreenfieldApp);


