import React from 'react';

const NameModal = ({ hideNameModal }) => (
  <div className="nameModal-container">
    NameModal
    <button onClick={() => hideNameModal()}>x</button>
  </div>
);

export default NameModal;
