// import { useContext } from "react";
// import { SnippetContext } from "../../context/SnippetContext";
import React from "react";
import { useParams } from "react-router-dom";

interface IViewSnippetNav {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewSnippetNav: React.FC<IViewSnippetNav> = ({ setIsEdit }) => {
  const { snippetId } = useParams();
  console.log("from useParams sId =====> ", snippetId);
  console;

  // const { snippet } = useContext(SnippetContext);
  return (
    <>
      <div className="nav-container">
        <div className="action-btn">
          <button onClick={() => setIsEdit(true)}>Edit Snippet</button>
          <button>Delete Snippet</button>
        </div>
        <img id="logo" src="binaryshare-icon.svg" height={50} width={50} />
      </div>
    </>
  );
};

export default ViewSnippetNav;
