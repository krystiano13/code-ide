import React, { useEffect } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import { useDispatch, useSelector } from "react-redux";
import { html, css, js } from "../../../reducers/codeReducer";

require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/css/css");

const EditArea = (props) => {
  const [value, setValue] = React.useState();
  const dispatch = useDispatch();
  const htmlLang = useSelector((state) => state.html);
  const cssLang = useSelector((state) => state.css);
  const jsLang = useSelector((state) => state.js);

  useEffect(() => {
    switch (props.mode) {
      case "xml":
        setValue(htmlLang);
        break;
      case "css":
        setValue(cssLang);
        break;
      case "javascript":
        setValue(jsLang);
        break;
    }
  }, []);

  return (
    <CodeMirror
      value={value}
      options={{
        mode: props.mode,
        theme: "material",
        lineNumbers: true,
      }}
      onBeforeChange={(editor, data, value) => {
        setValue(value);
      }}
      onChange={(editor, data, value) => {}}
    />
  );
};

export { EditArea };
