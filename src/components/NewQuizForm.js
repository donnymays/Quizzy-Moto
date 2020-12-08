import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase'

function NewQuizForm(props){

  const firestore = useFirestore();

  function addQuizToFirestore(event) {
    event.preventDefault();

    props.onNewQuizCreation();

    return firestore.collection('quizes').add(
      {
        title: event.target.title.value,
        q1: event.target.q1.value, 
        q2: event.target.q2.value,
        q3: event.target.q3.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addQuizToFirestore}
        buttonText="Create This Quiz!" />
    </React.Fragment>
  );
}

NewQuizForm.propTypes = {
  onNewQuizCreation: PropTypes.func
};

export default NewQuizForm;