import React from 'react';
import { connect } from 'react-redux';
import { updateName, showNameModal, hideNameModal } from '../actions';
import Modal from './Modal';
import NameModal from './NameModal';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedName: ''
    };
    this.handleUpdateName = this.handleUpdateName.bind(this);
    this.handleSubmitUpdatedName = this.handleSubmitUpdatedName.bind(this);
  }
  handleUpdateName(e) {
    this.setState({
      updatedName: e.target.value
    });
  }
  handleSubmitUpdatedName() {
    this.props.updateName(this.state.updatedName);
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
            <button
              className="component-editButton"
              onClick={() => this.props.showNameModal()}
            >
              Edit Name
            </button>
          </div>
        </div>
        {this.props.displayNameModal && (
          <Modal>
            <NameModal
              name={this.props.name}
              updateName={this.props.updateName}
              handleUpdateName={this.handleUpdateName}
              handleSubmitUpdatedName={this.handleSubmitUpdatedName}
              hideNameModal={this.props.hideNameModal}
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
  showNameModal: () => dispatch(showNameModal()),
  hideNameModal: () => dispatch(hideNameModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Name);
