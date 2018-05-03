import { CHECK_RADIO } from '../actions/CheckRadio';

const initialState = {
  formSubmitted: false,
  formData: new FormData(),
  checked: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_RADIO:
      return { ...state, checked: action.payload };
    default:
      return state;
  }
};

export default rootReducer;