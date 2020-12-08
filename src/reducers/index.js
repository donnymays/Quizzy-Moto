import quizListReducer from './quiz-list-reducer.js';
import selectedQuizReducer from './selected-quiz-reducer';
import editFormVisibleReducer from './edit-form-visible-reducer';
import newFormVisibleReducer from './new-form-visible-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  editFormVisibleOnPage: editFormVisibleReducer,
  newFormVisibleOnPage: newFormVisibleReducer,
  masterQuizList: quizListReducer,
  selectedQuiz: selectedQuizReducer,
  firestore: firestoreReducer
});

export default rootReducer;