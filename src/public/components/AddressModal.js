import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  address: PropTypes.object,
  handleUpdateAddress: PropTypes.func.isRequired,
  handleSubmitUpdatedAddress: PropTypes.func.isRequired,
  handleToggleAddressModal: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
};

const AddressModal = ({
  address,
  handleUpdateAddress,
  handleSubmitUpdatedAddress,
  handleToggleAddressModal,
  handleCancel
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
      onClick={() => (handleCancel(), handleToggleAddressModal())}
    >
      Close
      <button className="modal-closeButton">x</button>
    </div>
    <div className="modal-bottomButtons">
      <div
        className="modal-cancelButton"
        onClick={() => (handleCancel(), handleToggleAddressModal())}
      >
        Cancel
      </div>
      <div
        className="modal-saveButton"
        onClick={() => (handleSubmitUpdatedAddress(), handleToggleAddressModal())}
      >
        Save
      </div>
    </div>
  </div>
);

AddressModal.propTypes = propTypes;

export default AddressModal;
