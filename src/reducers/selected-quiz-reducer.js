import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const {selectedQuiz} = action;
  switch (action.type) {
  case c.SELECTED_QUIZ:
    console.log(selectedQuiz)
    const newState = selectedQuiz;
    return newState;
  case c.DESELECTED_QUIZ:
    const newState2 = null;
    return newState2;
  default:
    return state;
  }
};