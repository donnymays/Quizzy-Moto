import * as a from './ActionTypes';

export const toggleEditForm = () => ({
  type: a.TOGGLE_EDIT_FORM
});

export const toggleNewForm = () => ({
  type: a.TOGGLE_NEW_FORM
});

export const selectedQuiz = (quiz) => {
  return {
    type: a.SELECTED_QUIZ,
    selectedQuiz: quiz
  }
}

export const deselectedQuiz = () => ({
  type: a.DESELECTED_QUIZ
});

export const toggleResponse = () => ({
  type: a.TOGGLE_RESPONSE
});

export const toggleQuizLists = () => ({
  type: a.TOGGLE_QUIZ_LISTS
})
