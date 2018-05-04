import { CHECK_RADIO } from '../actions/CheckRadio';
import { SUBMIT_FORM } from '../actions/SumbitForm';
import { TOGGLE_EXPAND } from "../actions/ToggleExpand";

const initialState = {
  formSubmitted: false,
  formData: new FormData(),
  checked: '',
  expanded: false,
  expanderText: 'read more...'
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_RADIO:
      return { ...state, checked: action.payload };
    case SUBMIT_FORM:
      return { ...state, formSubmitted: action.payload.formSubmitted, formData: action.payload.formData };
    case TOGGLE_EXPAND:
      return { ...state, expanded: !state.expanded };
    default:
      return state;
  }
};

export default rootReducer;