import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SnippetArea from "./components/SnippetArea";
import { SnippetContext } from "./context/SnippetContext";

function App() {
  const [snippet, setSnippet] = useState("");
  const value = { snippet, setSnippet };
  console.log("snippet => ", snippet);
  return (
    <SnippetContext.Provider value={value}>
      <NavigationBar />
      <SnippetArea />
    </SnippetContext.Provider>
  );
}
``;
export default App;
