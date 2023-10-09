import React, { useState, Suspense, lazy } from "react";
import "./Editor.css";

import { Switch } from "./Switch/Switch";
import { Loading } from "../Loading/Loading";

const EditArea = lazy(() => import("./EditArea/EditArea"));
const Page = lazy(() => import("./PageView/Page"));

const HTMLEditor = () => (
  <Suspense fallback={<Loading />}>
    <EditArea mode="xml" />
  </Suspense>
);
const CSSEditor = () => (
  <Suspense fallback={<Loading />}>
    <EditArea mode="css" />
  </Suspense>
);
const JSEditor = () => (
  <Suspense fallback={<Loading />}>
    <EditArea mode="javascript" />
  </Suspense>
);

const Editor = () => {
  const [mode, setMode] = useState("HTML");

  return (
    <main className="width-100 bg-secondary">
      <Switch mode={mode} changeMode={(btn) => setMode(btn)} />
      {mode === "HTML" && <HTMLEditor />}
      {mode === "CSS" && <CSSEditor />}
      {mode === "JS" && <JSEditor />}
      {mode === "Page" && (
        <Suspense fallback={<Loading />}>
          <Page />
        </Suspense>
      )}
    </main>
  );
};

export { Editor };
