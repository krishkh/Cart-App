import React, { useState } from "react";
import Modal from "./Modal"; // Import the Modal component

function SignInPopUp() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={togglePopup}>Sign up/ Sign in</button>
      <Modal isOpen={isOpen} onClose={togglePopup}>
        {/* Modal content goes here */}
      </Modal>
    </>
  );
}

export default SignInPopUp;
