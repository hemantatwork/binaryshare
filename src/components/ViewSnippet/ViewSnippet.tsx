import React, { useState } from "react";
import ViewSnippetNav from "./ViewSnippetNav";
import ViewSnippetArea from "./ViewSnippetArea";

const ViewSnippet = () => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      <ViewSnippetNav setIsEdit={setIsEdit} />
      <ViewSnippetArea isEdit={isEdit} />
    </>
  );
};

export default ViewSnippet;
