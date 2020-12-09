import React from "react";
import PropTypes from "prop-types";

function ResponseForm(props) {
  const {quiz} = props;
  return (
    <React.Fragment>
      <div className="container">
        <form onSubmit={props.responseSubmissionHandler}>
          <label for = 'q1'>{quiz.q1}</label>
          <textarea
            type='text'
            name='a1'
            placeholder='Question One' />
            <hr/>
          <label for='q2'>{quiz.q2}</label>
          <textarea
            type='text'
            name='a2'
            placeholder='Question Two' />
            <hr/>
          <label for='q3'>{quiz.q3}</label>
          <textarea
            type='text'
            name='a3'
            placeholder='Question Three' />
          <button type='submit'>{props.buttonText}</button>
        </form>
      </div>
    </React.Fragment>
  );
}

ResponseForm.propTypes = {
  responseSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ResponseForm;