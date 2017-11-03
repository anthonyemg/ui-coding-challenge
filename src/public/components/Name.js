import React from 'react';
import { connect } from 'react-redux';
import { showNameModal, hideNameModal } from '../actions';
import Modal from './Modal';
import NameModal from './NameModal';

class Name extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('wooo', this.props.displayNameModal);
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
              onClick={() => this.props.showNameModal()}
            >
              Edit Name
            </button>
          </div>
        </div>
        {this.props.displayNameModal && (
          <Modal>
            <NameModal hideNameModal={this.props.hideNameModal} />
          </Modal>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  displayNameModal: state.displayNameModal
});
const mapDispatchToProps = dispatch => ({
  showNameModal: () => dispatch(showNameModal()),
  hideNameModal: () => dispatch(hideNameModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Name);
