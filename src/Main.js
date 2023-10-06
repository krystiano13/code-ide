import React from "react";

import { Navbar } from "./components/Navbar/Navbar";
import { Editor } from "./components/editor/Editor";

const Main = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Editor />
    </React.Fragment>
  );
};

export { Main };
