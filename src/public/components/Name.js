import React from 'react';
import { connect } from 'react-redux';
import { showModal, hideModal } from '../actions';
import Modal from './Modal';

class Name extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="name-container">
        <div className="name-wrapper">
          <div className="name-details">
            <span className="name-containerTitle">Name</span>
            <span>Tony</span>
          </div>
          <div>
            <button
              className="name-editButton"
              onClick={() => this.props.showModal()}
            >
              Edit Name
            </button>
          </div>
        </div>
        {this.props.displayModal ? <Modal /> : ''}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  displayModal: state.displayModal
});
const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(showModal()),
  hideModal: () => dispatch(hideModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Name);
