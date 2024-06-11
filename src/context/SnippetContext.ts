import { Dispatch, SetStateAction, createContext } from "react";

interface ISnippetContext {
  snippet: string;
  setSnippet: Dispatch<SetStateAction<string>>;
}

export const SnippetContext = createContext<ISnippetContext>({
  snippet: "",
  setSnippet: () => {},
});
