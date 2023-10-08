import React, { useEffect, useState } from "react";
import "./Editor.css";

import { Switch } from "./Switch/Switch";
import { EditArea } from "./EditArea/EditArea";
import { Page } from "./PageView/Page";

const HTMLEditor = () => <EditArea mode="xml" />;
const CSSEditor = () => <EditArea mode="css" />;
const JSEditor = () => <EditArea mode="javascript" />;

const Editor = () => {
  const [mode, setMode] = useState("HTML");

  return (
    <main className="width-100 bg-secondary">
      <Switch mode={mode} changeMode={(btn) => setMode(btn)} />
      {mode === "HTML" && <HTMLEditor />}
      {mode === "CSS" && <CSSEditor />}
      {mode === "JS" && <JSEditor />}
      {mode === "Page" && <Page />}
    </main>
  );
};

export { Editor };
