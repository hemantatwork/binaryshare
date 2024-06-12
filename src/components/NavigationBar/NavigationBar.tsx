import { useContext } from "react";
import { SnippetContext } from "../../context/SnippetContext";
import "./NavigationBar.css";
// import { useQuery } from "@tanstack/react-query";
import { saveSnippet } from "../../services/snippets";
import { useMutation } from "@tanstack/react-query";
import { ISnippet } from "../../interfaces/snippetInterface";

const NavigationBar = () => {
  const { snippet, setSnippet } = useContext(SnippetContext);
  const mutation = useMutation({
    mutationFn: (newSnippet: ISnippet) => saveSnippet(newSnippet),
  });
  console.log("mutation", mutation);
  console.log("-------------->", import.meta.env.REACT_APP_BACKEND_BASEURL);
  // const { isPending, error, data } = useQuery({
  //   queryKey: ["saveSnippet"],
  //   queryFn: () =>
  //     saveSnippet({ snippet, snippet_type: "js", expiry_time: "3002" }),
  // });

  // if (isPending) return "Loading...";

  // if (error) return "An error has occurred: " + error.message;

  // console.log("data ====> ", data);
  // setSnippet(data.data.snippet);
  console.log(snippet, setSnippet);
  // const onPasteSnippet = () => {
  //   console.log("clicked !!!");
  // };
  return (
    <div>
      {mutation.isPending ? (
        "Adding todo..."
      ) : (
        <>
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
      )}
    </div>
  );
};

export default NavigationBar;
