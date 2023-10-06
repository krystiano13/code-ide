import { createRoot } from "react-dom/client";
import { Main } from "./Main";

import './base.css';
import './micro-css-framework/index.css';

const rootTag = document.querySelector("#root");
const root = createRoot(rootTag);

root.render(
  <>
    <Main />
  </>
);
