import React from 'react';

const NameModal = ({
  name,
  handleUpdateName,
  handleSubmitUpdatedName,
  hideNameModal,
  handleCancel
}) => (
  <div className="modal-content">
    <div>
      <span>Name</span>
      <input className="modal-input" defaultValue={name} onChange={handleUpdateName} />
    </div>

    <span className="modal-title">Edit Name</span>
    <div className="modal-closeButtonContainer" onClick={() => hideNameModal()}>
      Close
      <button className="modal-closeButton">x</button>
    </div>
    <div className="modal-bottomButtons">
      <div className="modal-cancelButton" onClick={() => (handleCancel(), hideNameModal())}>
        Cancel
      </div>
      <div
        className="modal-saveButton"
        onClick={() => (handleSubmitUpdatedName(), hideNameModal())}
      >
        Save
      </div>
    </div>
  </div>
);

export default NameModal;
