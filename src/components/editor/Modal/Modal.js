import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadOneProject, saveProject } from "../../../reducers/codeReducer";

import "./Modal.css";

const Modal = (props) => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  const save = (e) => {
    e.preventDefault();
    dispatch(saveProject([e.target[0].value, props.name]));
    props.hide();
  };

  const load = (e) => {
    e.preventDefault();
    const index = projects.findIndex((item) => item.name === e.target[0].value);
    dispatch(loadOneProject(index));
    props.hide();
    props.setName(projects[index].name);
  };

  React.useEffect(() => {
    if (props.mode === "save" && props.name !== null) {
      dispatch(saveProject([props.name, props.name]));
      props.hide();
    }
  }, []);

  return (
    <div className="ModalWrapper p-fixed width-100 height-100 d-flex flex-col jc-center ai-center">
      <form
        onSubmit={props.mode === "save" ? save : load}
        className="Modal bg-primary br-rad-1 d-flex ai-center jc-center"
      >
        {props.mode === "save" && (
          <>
            <input
              className="br-none p-1 outline-none font-other f-400 box-border"
              name="name"
              placeholder="Project name"
              type="text"
            />
          </>
        )}
        {props.mode === "load" && (
          <>
            <select className="br-none p-1 outline-none c-pointer font-other f-400 box-border">
              {projects.map((item) => (
                <option key={item.id} id={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </>
        )}
        <button
          className="c-pointer box-border p-1 pr-2 pl-2 font-head color bg-secondary br-none"
          type="submit"
        >
          {props.mode === "save" ? "Save" : "Load"}
        </button>
      </form>
    </div>
  );
};

export { Modal };
