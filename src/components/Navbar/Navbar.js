import React from "react";
import './Navbar.css';
import { Modal } from "../editor/Modal/Modal";
import { useDispatch } from "react-redux";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { loadProjects, saveProject } from "../../reducers/codeReducer";

const Navbar = () => {
    return (
        <>
            <Modal mode="load" />
        <nav className="width-100 p-3 pt-5 pb-5 bg">
          <button>Load Project</button>
          <button>Save Project</button>
        </nav>
      </>
    );
}

export { Navbar };