import React from "react";

const Modal = ({ setOnClose }) => {
  return (
    <div className="model-overlay" onClick={() => setOnClose((prev) => !prev)}>
      <button
        className="model-close"
        onClick={() => setOnClose((prev) => !prev)}
      >
        Close
      </button>
      <p>This is the content of the modal.</p>
    </div>
  );
};

export default Modal;
