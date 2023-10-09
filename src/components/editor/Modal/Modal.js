import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadOneProject, saveProject } from "../../../reducers/codeReducer";

import "./Modal.css";

const Modal = (props) => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  const html = useSelector((state) => state.html);

  console.log(projects[0]);

  const save = (e) => {
    e.preventDefault();
    dispatch(saveProject(e.target[0].value));
  };
  const load = (e) => {
    e.preventDefault();
    const index = projects.findIndex((item) => item.name === e.target[0].value);
    dispatch(loadOneProject(index));
    console.log(html);
  };

  return (
    <div className="ModalWrapper p-fixed width-100 height-100 d-flex flex-col jc-center ai-center">
      <form
        onSubmit={props.mode === "save" ? save : load}
        className="Modal bg-primary br-rad-1 d-flex ai-center jc-center"
      >
        {props.mode === "save" && (
          <>
            <input name="name" placeholder="Project name" type="text" />
          </>
        )}
        {props.mode === "load" && (
          <>
            <select>
              {projects.map((item) => (
                <option key={item.id} id={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </>
        )}
        <button type="submit">{props.mode === "save" ? "Save" : "Load"}</button>
      </form>
    </div>
  );
};

export { Modal };
