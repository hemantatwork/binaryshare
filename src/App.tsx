import { useState } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SnippetArea from "./components/SnippetArea";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
import { SnippetContext } from "./context/SnippetContext";
import "./App.css";

function App() {
  const [snippet, setSnippet] = useState("");
  const value = { snippet, setSnippet };
  console.log("snippet => ", snippet);
  return (
    <QueryClientProvider client={queryClient}>
      <SnippetContext.Provider value={value}>
        <NavigationBar />
        <SnippetArea />
      </SnippetContext.Provider>
    </QueryClientProvider>
  );
}
``;
export default App;
