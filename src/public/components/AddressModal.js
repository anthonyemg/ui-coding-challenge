import React from 'react';

const AddressModal = ({ hideAddressModal }) => (
  <div>
    AddressModal
    <div
      className="modal-closeButtonContainer"
      onClick={() => hideAddressModal()}
    >
      Close
      <button className="modal-closeButton">x</button>
    </div>
    <div className="modal-bottomButtons">
      <div className="modal-cancelButton">Cancel</div>
      <div className="modal-saveButton">Save</div>
    </div>
  </div>
);

export default AddressModal;
