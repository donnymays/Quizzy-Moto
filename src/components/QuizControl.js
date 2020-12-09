import React from 'react';
import NewQuizForm from './NewQuizForm';
import QuizList from './QuizList';
import QuizDetail from './QuizDetail';
import Response from './Response';
import EditQuizForm from './EditQuizForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';

class QuizControl extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedQuiz: null,
  //     editing: false
  //   };
  // }


  handleClick = () => {
    if (this.props.editFormVisibleOnPage) {
      const {dispatch} = this.props
      const action = a.toggleEditForm();
      dispatch(action)
      const action2 = a.deselectedQuiz();
      dispatch(action2);
    } if (this.props.selectedQuiz != null) {
      const {dispatch} = this.props
      const action = a.deselectedQuiz();
      dispatch(action);
    } else {
      const { dispatch } = this.props;
      const action2 = a.toggleNewForm();
      dispatch(action2);
    }
  }

  handleAddingNewQuizToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleNewForm();
    dispatch(action);
  }

  handleChangingSelectedQuiz = (id) => {
    const {dispatch} = this.props
    this.props.firestore.get({collection: 'quizes', doc: id}).then((quiz) => {
      const firestoreQuiz = {
        title: quiz.get("title"),
        q1: quiz.get("q1"),
        q2: quiz.get("q2"),
        q3: quiz.get("q3"),
        id: quiz.id
      }
      const action = a.selectedQuiz(firestoreQuiz)
      dispatch(action);
    });
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEditForm();
    dispatch(action);
  }

  handleEditingQuizInList = () => {
    const {dispatch} = this.props;
    const action = a.deselectedQuiz();
    dispatch(action)
    const action2 = a.toggleEditForm();
    dispatch(action2)
    
  }

  handleDeletingQuiz = (id) => {
    this.props.firestore.delete({collection: 'quizes', doc: id});
    const {dispatch} = this.props;
    const action = a.deselectedQuiz();
    dispatch(action);
  }

  handleRespondClick = () => {
    const {dispatch} = this.props
    const action = a.toggleResponse();
    dispatch(action);
    console.log(this.props)
  }

  handleSubmitResponse = () => {
    const {dispatch} = this.props;
    const action = a.toggleResponse();
    dispatch(action);
  }
  // handle

  render () {
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the queue.</h1>
        </React.Fragment>
      )
    } 
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.props.response) {
        currentlyVisibleState = <Response
        quiz = {this.props.selectedQuiz}
        onSubmitResponse = {this.handleSubmitResponse} />
        buttonText = 'Return Home'
      } else if (this.props.editFormVisibleOnPage) {
        currentlyVisibleState = <EditQuizForm
        quiz = {this.props.selectedQuiz}
        onEditQuiz = {this.handleEditingQuizInList} />
        buttonText = 'Return Home'
      } else if (this.props.selectedQuiz != null) {
        currentlyVisibleState = <QuizDetail
        quiz = {this.props.selectedQuiz}
        onClickingDelete = {this.handleDeletingQuiz}
        onClickingEdit = {this.handleEditClick}
        onClickingRespond = {this.handleRespondClick} />
        buttonText = "Return Home"
      } else if (this.props.newFormVisibleOnPage) {
        currentlyVisibleState = <NewQuizForm
        uid = {auth.currentUser.uid}
        onNewQuizCreation = {this.handleAddingNewQuizToList} />
        buttonText = "Return Home";
      } else {    
        currentlyVisibleState = <QuizList
        quizList = {this.props.masterQuizList}
        onQuizSelection={this.handleChangingSelectedQuiz} />;
        buttonText = "Add Quiz";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }  
  }
}

QuizControl.propTypes = {
  masterQuizList: PropTypes.object,
  editFormVisibleOnPage: PropTypes.bool,
  newFormVisibleOnPage: PropTypes.bool, 
  selectedQuiz: PropTypes.object,
  response: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterQuizList: state.masterQuizList,
    newFormVisibleOnPage: state.newFormVisibleOnPage,
    editFormVisibleOnPage: state.editFormVisibleOnPage,
    selectedQuiz: state.selectedQuiz,
    response: state.response
  }
}

QuizControl = connect(mapStateToProps)(QuizControl);

export default withFirestore(QuizControl);