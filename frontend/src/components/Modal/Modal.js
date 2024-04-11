import React from "react";
import "./Modal.scss";

function Modal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Mentions légales</h2>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-content">
          <p>Mes mentions légales...</p>      

        </div>
      </div>
    </div>
  );
}

export default Modal;