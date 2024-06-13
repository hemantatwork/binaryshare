import { useContext, useEffect } from "react";
import { SnippetContext } from "../../context/SnippetContext";
import { saveSnippet } from "../../services/snippets";
import { useMutation } from "@tanstack/react-query";
import { ISaveSnippetResponse } from "../../interfaces/snippetInterface";
import { useParams } from "react-router-dom";

const EditSnippetNav = () => {
  const { snippetId } = useParams();
  console.log("from useParams sId =====> ", snippetId);
  console;

  const { snippet } = useContext(SnippetContext);

  // post request to save snippet in database
  const mutation = useMutation({
    mutationFn: saveSnippet,
    onSuccess: (data) => {
      console.log("data =======>", data);
      const { data: snippetRes } = data as { data: unknown };
      const {
        success,
        data: snippetData,
        message,
      } = snippetRes as ISaveSnippetResponse;
      console.log(success);
      console.log(snippetData);
      console.log(message);

      navigate(`${snippetData._id}`);
    },
  });

  const navigate = (url: string) => {
    window.history.pushState({}, "", url);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  useEffect(() => {
    const handlePopState = () => {
      // Handle the location change, e.g., update state or UI
      console.log("Location changed to:", window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
  return (
    <>
      {mutation.isPending ? "Adding todo.." : null}
      {mutation.isError ? (
        <div>An error occurred: {mutation.error.message}</div>
      ) : null}
      {mutation.isSuccess ? <div>Todo added!</div> : null}
      <div className="nav-container">
        <div className="action-btn">
          <button
            onClick={() => {
              mutation.mutate({
                snippet,
                snippet_type: "js",
                expiry_time: "3002",
              });
            }}
            disabled={snippet.length === 0 ? true : false}
          >
            Paste Snippet
          </button>
          {snippet}
        </div>
        <img id="logo" src="binaryshare-icon.svg" height={50} width={50} />
      </div>
    </>
  );
};

export default EditSnippetNav;
