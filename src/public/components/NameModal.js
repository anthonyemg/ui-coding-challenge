import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  handleUpdateName: PropTypes.func.isRequired,
  handleSubmitUpdatedName: PropTypes.func.isRequired,
  handleToggleNameModal: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
};

const NameModal = ({
  name,
  handleUpdateName,
  handleSubmitUpdatedName,
  handleToggleNameModal,
  handleCancel
}) => (
  <div className="modal-content">
    <div>
      <span>Name</span>
      <input className="modal-input" defaultValue={name} onChange={handleUpdateName} />
    </div>

    <span className="modal-title">Edit Name</span>
    <div
      className="modal-closeButtonContainer"
      onClick={() => (handleCancel(), handleToggleNameModal())}
    >
      Close
      <button className="modal-closeButton">x</button>
    </div>
    <div className="modal-bottomButtons">
      <div className="modal-cancelButton" onClick={() => (handleCancel(), handleToggleNameModal())}>
        Cancel
      </div>
      <div
        className="modal-saveButton"
        onClick={() => (handleSubmitUpdatedName(), handleToggleNameModal())}
      >
        Save
      </div>
    </div>
  </div>
);

NameModal.propTypes = propTypes;

export default NameModal;
