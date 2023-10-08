import ReactDOM from 'react-dom';
import { Main } from "./Main";
import { Provider } from 'react-redux';
import { store } from './store/store';

import './base.css';
import './micro-css-framework/index.css';

const rootTag = document.querySelector("#root");

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  rootTag
);
