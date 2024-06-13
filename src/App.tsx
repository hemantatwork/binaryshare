import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
import { SnippetContext } from "./context/SnippetContext";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import EditSnippet from "./components/EditSnippet/EditSnippet";
import ViewSnippet from "./components/ViewSnippet/ViewSnippet";

function App() {
  const [snippet, setSnippet] = useState("");
  const value = { snippet, setSnippet };
  console.log("snippet => ", snippet);
  return (
    <SnippetContext.Provider value={value}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<EditSnippet />} />
          <Route path="/:snippetId" element={<ViewSnippet />} />
        </Routes>
      </QueryClientProvider>
    </SnippetContext.Provider>
  );
}
``;
export default App;
