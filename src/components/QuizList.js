import React from "react";
import PropTypes from "prop-types";
import Quiz from "./Quiz";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
// import Row from "react-bootstrap/row";
// import Col from "react-bootstrap/col";

function QuizList(props){

  useFirestoreConnect([
    { collection: 'quizes' }
  ]);

  useFirestoreConnect([
    { collection: 'responses' }
  ]);

  const quizes = useSelector(state => state.firestore.ordered.quizes);
  const responses = useSelector(state => state.firestore.ordered.responses);

  console.log(responses)
  
  if (isLoaded(quizes)) { 
    return (
      <React.Fragment>
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

QuizList.propTypes = {
  onQuizSelection: PropTypes.func
};

export default QuizList;