import React from "react";
import { useSelector } from "react-redux";

const Modal = (props) => {
  const projects = useSelector((state) => state.projects);
  return (
    <div className="ModalWrapper">
      <form className="Modal">
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
                  {item}
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
