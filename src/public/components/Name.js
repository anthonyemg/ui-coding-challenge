import React from 'react';
import { connect } from 'react-redux';
import { updateName, toggleNameModal } from '../actions';
import Modal from './Modal';
import NameModal from './NameModal';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedName: this.props.name
    };
    this.handleUpdateName = this.handleUpdateName.bind(this);
    this.handleSubmitUpdatedName = this.handleSubmitUpdatedName.bind(this);
    this.handleToggleNameModal = this.handleToggleNameModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  // this updates the component's state with the input field's contents from the modal
  handleUpdateName(e) {
    this.setState({
      updatedName: e.target.value
    });
  }
  // I attempted to dispatch the updateName action from the modal but there was a delay in rendering from this component and the solution was calling it from here instead
  handleSubmitUpdatedName() {
    this.props.updateName(this.state.updatedName);
  }
  handleToggleNameModal() {
    this.props.toggleNameModal(!this.props.displayNameModal);
  }
  // if user cancels after changing name in modal, this resets this components state to the store's name
  handleCancel() {
    this.setState({
      updatedName: this.props.name
    });
  }
  render() {
    return (
      <div className="component-container">
        <div className="component-wrapper">
          <div className="component-details">
            <span className="component-title">Name</span>
            <span className="component-text">{this.props.name}</span>
          </div>
          <div>
            <button className="component-editButton" onClick={() => this.handleToggleNameModal()}>
              Edit Name
            </button>
          </div>
        </div>
        {this.props.displayNameModal && (
          <Modal>
            <NameModal
              name={this.props.name}
              handleUpdateName={this.handleUpdateName}
              handleSubmitUpdatedName={this.handleSubmitUpdatedName}
              handleToggleNameModal={this.handleToggleNameModal}
              handleCancel={this.handleCancel}
            />
          </Modal>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  displayNameModal: state.displayNameModal
});
const mapDispatchToProps = dispatch => ({
  updateName: name => dispatch(updateName(name)),
  toggleNameModal: boolean => dispatch(toggleNameModal(boolean))
});

export default connect(mapStateToProps, mapDispatchToProps)(Name);
