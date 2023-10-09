import React from "react";
import { useDispatch } from "react-redux";
import { loadProjects } from "./reducers/codeReducer";

import { Navbar } from "./components/Navbar/Navbar";
import { Editor } from "./components/editor/Editor";

const Main = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadProjects());
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Editor />
    </React.Fragment>
  );
};

export { Main };
