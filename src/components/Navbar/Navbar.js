import React from "react";
import "./Navbar.css";
import { Modal } from "../editor/Modal/Modal";

const Navbar = () => {
  const [modal, setModal] = React.useState(false);
  const [modalMode, setModalMode] = React.useState("save");
  return (
    <>
      {modal && <Modal mode={modalMode} />}

      <nav className="width-100 p-3 pt-5 pb-5 bg">
        <button
          onClick={() => {
            setModalMode("load");
            setModal(true);
          }}
        >
          Load Project
        </button>
        <button
          onClick={() => {
            setModalMode("save");
            setModal(true);
          }}
        >
          Save Project
        </button>
      </nav>
    </>
  );
};

export { Navbar };
