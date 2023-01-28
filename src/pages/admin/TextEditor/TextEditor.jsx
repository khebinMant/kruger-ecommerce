import React from "react";
import { Editor } from "primereact/editor";
import { useState } from "react";
import "./TextEditor.scss";

const TextEditor = () => {
  const [text, setText] = useState("Hola Krugeriano!");

  return (
    <div className="texteditor">
      <Editor
        style={{ height: "320px" }}
        value={text}
        onTextChange={(e) => setText(e.htmlValue)}
      />
    </div>
  );
};

export default TextEditor;
