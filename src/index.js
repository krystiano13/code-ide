import ReactDOM from 'react-dom';
import { Main } from "./Main";

import './base.css';
import './micro-css-framework/index.css';

const rootTag = document.querySelector("#root");

ReactDOM.render(
  <>
    <Main />
  </>,
  rootTag
);
