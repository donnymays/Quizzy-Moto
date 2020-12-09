import React from "react";
import PropTypes from "prop-types";

function QuizDetail(props){
  const { quiz, onClickingDelete } = props;
  console.log(quiz)
  return (
    
    <React.Fragment>
      <h1>Quiz Detail</h1>
      <h3>{quiz.title}</h3>
      <p><em>{quiz.q1}</em></p>
      <p><em>{quiz.q2}</em></p>
      <p><em>{quiz.q3}</em></p>
      <button onClick={ props.onClickingRespond }>Respond To Quiz</button>
      <button onClick={ props.onClickingEdit }>Update Quiz</button>
      <button onClick={()=> onClickingDelete(quiz.id) }>Close quiz</button>
      <hr/>
    </React.Fragment>
  );
}

QuizDetail.propTypes = {
  quiz: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingRespond: PropTypes.func
};

export default QuizDetail;