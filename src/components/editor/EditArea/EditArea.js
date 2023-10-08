import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/css/css");

const EditArea = (props) => {
  const [value, setValue] = React.useState();

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
