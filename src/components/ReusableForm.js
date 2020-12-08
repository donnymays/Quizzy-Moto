import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='title'
          placeholder="Quiz Title" />
        <textarea
          type='text'
          name='q1'
          placeholder='Question One' />
        <textarea
          type='text'
          name='q2'
          placeholder='Question Two' />
        <textarea
          type='text'
          name='q3'
          placeholder='Question Three' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;