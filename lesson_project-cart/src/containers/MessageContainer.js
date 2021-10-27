import { Component } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Messsage from '../components/Message'
class MessageContainer extends Component { 

  
  render() {
    var{message}=this.props;
    return (
      <Messsage message={message}/>
    );
  }
}

MessageContainer.propTypes={
  message:PropTypes.string.isRequired
}

const mapStatetoProps = (state) => {
  return {
    message:state.message
  }
}

// const mapDispatchToProps = (dispatch, props) => {
//   return {
//     onSaveTask: (task) => {
//       dispatch(actions.saveTask(task));
//     },
//     onCloseForm: () => {
//       dispatch(actions.closeForm())
//     },
//     onOpenForm: () => {
//       dispatch(actions.openForm())
//     }
//   }
// }
export default connect(mapStatetoProps, null)(MessageContainer);
