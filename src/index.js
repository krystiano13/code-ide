import { createRoot } from "react-dom/client";
import { Main } from "./Main";

const rootTag = document.querySelector("#root");
const root = createRoot(rootTag);

root.render(
  <>
    <Main />
  </>
);
