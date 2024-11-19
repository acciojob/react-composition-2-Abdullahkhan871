import React, { useState } from "react";
import "./../styles/App.css";
import Modal from "./Modal";

const App = () => {
  const [onClose, setOnClose] = useState(false);

  const handle = () => {
    setOnClose(false);
    console.log(onClose);
  };
  return (
    <div>
      <button onClick={() => setOnClose((prev) => !prev)}>Show Modal</button>
      {onClose && <Modal setOnClose={setOnClose} handle={handle} />}
    </div>
  );
};

export default App;
