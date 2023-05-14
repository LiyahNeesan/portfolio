import React, { useState } from "react";
import ModalWindow from "./ModalWindow";

const Contacts = (props) => {
  const { setModal, handleModal, modal } = props;

  return (
    <>
      <div className="border-bottom" id="contacts">
        <div className="contacts">
          <h1>Say Hello</h1>
          <p style={{ maxWidth: "500px" }}>
            I would like to join interesting communities and projects related to React JS 
            and open to share my knowledge I've learnt so far. If you would like to challenge 
            yourself and would like to give opportunity for internship for me, I would appreciate 
            that so much! Please feel free to contact me via email or phone.
          </p>
          <button className="button" onClick={handleModal}>
            Contacts
          </button>
        </div>
      </div>
      {modal && <ModalWindow setModal={setModal} />}
    </>
  );
};

export default Contacts;
