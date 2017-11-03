import React from 'react';

const NameModal = ({ hideNameModal }) => (
  <div>
    NameModal
    <div className="modal-closeButtonContainer" onClick={() => hideNameModal()}>
      Close
      <button className="modal-closeButton">x</button>
    </div>
    <div className="modal-bottomButtons">
      <div className="modal-cancelButton">Cancel</div>
      <div className="modal-saveButton">Save</div>
    </div>
  </div>
);

export default NameModal;
