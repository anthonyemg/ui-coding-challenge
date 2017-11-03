import React from 'react';

const FavoritesModal = ({ hideFavoritesModal }) => (
  <div>
    FavoritesModal
    <div
      className="modal-closeButtonContainer"
      onClick={() => hideFavoritesModal()}
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

export default FavoritesModal;
