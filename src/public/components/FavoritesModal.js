import React from 'react';

const FavoritesModal = ({ hideFavoritesModal }) => (
  <div className="favoritesModal-container">
    FavoritesModal
    <button onClick={() => hideFavoritesModal()}>x</button>
  </div>
);

export default FavoritesModal;
