import React from "react";
import PropTypes from "prop-types";
import ResponseForm from "./ResponseForm";
import { useFirestore } from 'react-redux-firebase'

function Response(props){
  const { quiz } = props;
  const firestore = useFirestore();

  function addResponsesToFirestore(event) {
    event.preventDefault();

    props.onSubmitResponse();

    return firestore.collection('responses').add(


    // createReview => (review, tId) {
    //   firestore.collection("reviews").add({trailId: tid, content: "Amazing trail!" })
    // }
      {
        quizId: quiz.id,
        a1: event.target.a1.value, 
        a2: event.target.a2.value,
        a3: event.target.a3.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }
  // createReview => (review, tId) {
  //   firestore.collection("reviews").add({trailId: tid, content: "Amazing trail!" })
  // }

  return (
    <React.Fragment>
      <ResponseForm 
        responseSubmissionHandler={addResponsesToFirestore}
        quiz = {quiz} 
        buttonText="Submit" />
    </React.Fragment>
  );
}

Response.propTypes = {
  onSubmitResponse: PropTypes.func,
  a1: PropTypes.string,
  a2: PropTypes.string,
  a3: PropTypes.string
};

export default Response;