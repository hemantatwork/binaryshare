import { useContext } from "react";
import { SnippetContext } from "../context/SnippetContext";

const SnippetArea = () => {
  const { setSnippet } = useContext(SnippetContext);
  return (
    <div>
      <textarea
        name="main-textarea"
        id="main-textarea"
        placeholder="Your text content goes here..."
        onChange={(e) => setSnippet(e.target.value)}
      ></textarea>
    </div>
  );
};

export default SnippetArea;
