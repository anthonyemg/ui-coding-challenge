import React from 'react';

const FavoritesModal = ({ hideFavoritesModal }) => (
  <div className="modal-content">
    <div>
      <span>Favorites</span>
      <input className="modal-input" />
    </div>

    <span className="modal-title">Edit Favorites</span>
    <div
      className="modal-closeButtonContainer"
      onClick={() => hideFavoritesModal()}
    >
      Close
      <button className="modal-closeButton">x</button>
    </div>
    <div className="modal-bottomButtons">
      <div className="modal-cancelButton" onClick={() => hideFavoritesModal()}>
        Cancel
      </div>
      <div className="modal-saveButton">Save</div>
    </div>
  </div>
);

export default FavoritesModal;
