import React from "react";
import PropTypes from "prop-types";
import Quiz from "./Quiz";
import { useSelector } from 'react-redux'
import { useFirebase, useFirestore, withFirestore, useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import firebase from 'firebase/app'

function QuizIndex(props){
  const { uid } = props;

  useFirestoreConnect([
    { collection: 'quizes' }
  ]);

  useFirestoreConnect([
    { collection: 'responses' }
  ]);

  const quizes = useSelector(state => state.firestore.ordered.quizes);

  const responses = useSelector(state => state.firestore.ordered.responses);
  console.log(props)
  
  if (isLoaded(quizes)) { 
    
    return (
      <React.Fragment>
        <h1>Everyone's Quizzes</h1> 
        <hr/>
          {quizes.map((quiz) => {   
            return <Quiz
            whenQuizClicked = { props.onQuizSelection }
            title={quiz.title}
            q1={quiz.q1}
            q2={quiz.q2}
            q3={quiz.q3}
            id={quiz.id}
            key={quiz.id}
            />         
          })}
          <button onClick={props.handleQuizToggle}>TOGGLE ME HARD!</button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

QuizIndex.propTypes = {
  onQuizSelection: PropTypes.func
};

export default QuizIndex;
