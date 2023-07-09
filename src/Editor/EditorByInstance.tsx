import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import React, { createRef } from "react";

const InstanceEditor = () => {
  var editorRef = React.createRef<Editor>();

  const handleFocus = () => {
    console.log("focus");
  };

  return (
    <>
      <Editor
        previewStyle="vertical"
        height="400px"
        initialEditType="wysiwyg"
        initialValue="hello"
        ref={editorRef}
        onFocus={handleFocus}
      />
    </>
  );
};

export default InstanceEditor;
