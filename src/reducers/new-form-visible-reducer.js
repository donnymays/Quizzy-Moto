import * as a from '../actions/ActionTypes'

export default (state = false, action) => {
  switch (action.type) {
    case a.TOGGLE_NEW_FORM:
      return !state;
    default: 
    return state;
  }
};

