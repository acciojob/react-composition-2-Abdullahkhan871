import React from "react";

const Modal = ({ setOnClose, handle }) => {
  return (
    <div className="model-overlay" onClick={() => setOnClose(false)}>
      <button className="model-close" onClick={handle}>
        Close
      </button>
      <p className="model p">This is the content of the modal.</p>
    </div>
  );
};

export default Modal;
