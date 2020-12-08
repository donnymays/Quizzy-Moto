import React from "react";
import PropTypes from "prop-types";

function Quiz(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenQuizClicked(props.id)}>
        <h3>{props.title}</h3>
        <p><em>{props.q1}</em></p>
        <p><em>{props.q2}</em></p>
        <p><em>{props.q3}</em></p>
        
      </div>
      <hr/>
    </React.Fragment>
  );
}

Quiz.propTypes = {
  title: PropTypes.string,
  q1: PropTypes.string,
  q2: PropTypes.string,
  q3: PropTypes.string,
  formattedWaitTime: PropTypes.string,
  whenQuizClicked: PropTypes.func
};

export default Quiz;