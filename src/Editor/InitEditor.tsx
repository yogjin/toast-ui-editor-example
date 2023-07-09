import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const InitEditor = () => {
  return (
    <>
      <Editor
        initialValue="hello react editor"
        previewStyle={"tab"}
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </>
  );
};

export default InitEditor;
