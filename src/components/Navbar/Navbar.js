import React from "react";
import "./Navbar.css";
import { Suspense, lazy } from "react";
import { Loading } from "../Loading/Loading";

const Modal = lazy(() => import("../../components/editor/Modal/Modal"));

const Navbar = () => {
  const [modal, setModal] = React.useState(false);
  const [modalMode, setModalMode] = React.useState("save");
  const [name, setName] = React.useState(null);

  return (
    <>
      {modal && (
        <Suspense fallback={<Loading />}>
          <Modal
            name={name}
            setName={(name) => setName(name)}
            hide={() => setModal(false)}
            mode={modalMode}
          />
        </Suspense>
      )}

      <nav className="width-100 p-2 bg">
        <button
          className="p-1 font-head br-none color bg-primary c-pointer mr-1 br-b-solid br-b-3 br-b-accent"
          onClick={() => {
            setModalMode("load");
            setModal(true);
          }}
        >
          Load Project
        </button>
        <button
          className="p-1 font-head br-none color bg-primary c-pointer mr-1 br-b-solid br-b-3 br-b-accent"
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
