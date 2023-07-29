import React from 'react';

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
  zIndex: 9998, // Set a z-index lower than the modal to ensure the overlay appears behind it
};

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 9999,
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
};

export default function LoadingModal() {
  return (
    <>
      <div style={overlayStyle}></div>
      <div style={modalStyle} className="modal-dialog modal-dialog-centered">
        <div style={modalContentStyle} className="modal-content">
        <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
        </div>
      </div>
    </>
  );
}
