import React, { useState } from "react";
import "./../styles/App.css";
import Modal from "./Modal";

const App = () => {
  const [onClose, setOnClose] = useState(false);

  return (
    <div>
      <button onClick={() => setOnClose((prev) => !prev)}>Show Modal</button>
      {onClose && <Modal setOnClose={setOnClose} />}
    </div>
  );
};

export default App;
