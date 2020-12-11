import * as a from './../actions/ActionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case a.TOGGLE_QUIZ_LISTS:
      return !state;
    default: 
    return state;
  }
};