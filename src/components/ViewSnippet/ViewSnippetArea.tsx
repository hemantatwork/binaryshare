import { useContext } from "react";
import { SnippetContext } from "../../context/SnippetContext";

interface IViewSnippetArea {
  isEdit: boolean;
}

const ViewSnippetArea: React.FC<IViewSnippetArea> = ({ isEdit }) => {
  const { snippet } = useContext(SnippetContext);
  return (
    <div>
      <textarea
        name="main-textarea"
        id="main-textarea"
        placeholder="Your text content goes here..."
        defaultValue={snippet}
        disabled={isEdit}
      ></textarea>
    </div>
  );
};

export default ViewSnippetArea;
