import { useContext } from "react";
import { SnippetContext } from "../../context/SnippetContext";
import "./NavigationBar.css";

const NavigationBar = () => {
  const { snippet, setSnippet } = useContext(SnippetContext);
  console.log(snippet, setSnippet);
  const onPasteSnippet = () => {
    console.log("clicked !!!");
  };
  return (
    <>
      <div className="nav-container">
        <div className="action-btn">
          <button
            onClick={onPasteSnippet}
            disabled={snippet.length === 0 ? true : false}
          >
            Paste Snippet
          </button>
          {snippet}
          {/* <button>Edit Snippet</button> */}
          {/* <button>Delete</button> */}
        </div>
        <img id="logo" src="binaryshare-icon.svg" height={50} width={50} />
      </div>
    </>
  );
};

export default NavigationBar;
