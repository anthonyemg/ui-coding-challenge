import React from 'react';

const AddressModal = ({
  address,
  handleUpdateAddressLine1,
  handleUpdateAddressLine2,
  handleSubmitUpdatedAddress,
  hideAddressModal,
  handleCancel
}) => (
  <div className="modal-content">
    <div>
      <span>Line 1</span>
      <input
        className="modal-input"
        defaultValue={address.line1}
        onChange={handleUpdateAddressLine1}
      />
    </div>
    <div>
      <span>Line 2</span>
      <input
        className="modal-input"
        defaultValue={address.line2}
        onChange={handleUpdateAddressLine2}
      />
    </div>

    <span className="modal-title">Edit Address</span>
    <div className="modal-closeButtonContainer" onClick={() => hideAddressModal()}>
      Close
      <button className="modal-closeButton">x</button>
    </div>
    <div className="modal-bottomButtons">
      <div className="modal-cancelButton" onClick={() => (handleCancel(), hideAddressModal())}>
        Cancel
      </div>
      <div
        className="modal-saveButton"
        onClick={() => (handleSubmitUpdatedAddress(), hideAddressModal())}
      >
        Save
      </div>
    </div>
  </div>
);

export default AddressModal;
