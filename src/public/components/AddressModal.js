import React from 'react';

const AddressModal = ({
  address,
  updateAddress,
  handleUpdateAddress,
  handleSubmitUpdatedAddress,
  hideAddressModal
}) => (
  <div className="modal-content">
    <div>
      <span>Line 1</span>
      <input
        className="modal-input"
        defaultValue={address.line1}
        onChange={e => handleUpdateAddress(e, 'line1')}
      />
    </div>
    <div>
      <span>Line 2</span>
      <input
        className="modal-input"
        defaultValue={address.line2}
        onChange={e => handleUpdateAddress(e, 'line2')}
      />
    </div>
    <span className="modal-title">Edit Address</span>
    <div
      className="modal-closeButtonContainer"
      onClick={() => (updateAddress(address), hideAddressModal())}
    >
      Close
      <button className="modal-closeButton">x</button>
    </div>
    <div className="modal-bottomButtons">
      <div
        className="modal-cancelButton"
        onClick={() => (updateAddress(address), hideAddressModal())}
      >
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
