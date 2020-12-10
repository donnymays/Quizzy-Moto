import React from "react";
import PropTypes from "prop-types";
import Quiz from "./Quiz";
import { useSelector } from 'react-redux'
import { useFirestore, useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
// import Row from "react-bootstrap/row";
// import Col from "react-bootstrap/col";

function Dashboard(props){
  // const uid = this.props.firebase.auth().currentUser.uid

  useFirestoreConnect([
    { collection: 'quizes' }
  ]);

  useFirestoreConnect([
    { collection: 'responses' }
  ]);

  const firestore = useFirestrore();
  const myQuizes = firebase.firestore().collection('quizes').where('uid', '=', firebase.auth().currentUser.uid).get()
  // const myQuizes = useSelector(state => state.firestore.ordered.quizes).where(uid === quizes.);
  const responses = useSelector(state => state.firestore.ordered.responses);

 
  console.log('userquizzes:' + myQuizes);
  if (isLoaded(myQuizes)) { 
    return (
      <React.Fragment>
        <hr/>
          {myQuizes.map((quiz) => {   
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

Dashboard.propTypes = {
  onQuizSelection: PropTypes.func
};

export default Dashboard;