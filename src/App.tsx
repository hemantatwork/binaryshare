import { useState } from "react";
import "./App.css";

function App() {
  const [hashUrl, setHashUrl] = useState("");
  function generateUniqueId(length = 7) {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  // Example usage:
  const uniqueId = generateUniqueId();
  console.log(uniqueId);
  const onSubmit = () => {
    setHashUrl(window.location + uniqueId);
  };

  return (
    <>
      <div>
        <textarea
          name="main-textarea"
          id="main-textarea"
          placeholder="Your text content goes here..."
        ></textarea>
        <div>
          <button onClick={onSubmit}>Submit</button>
          {hashUrl && <p>{hashUrl}</p>}
        </div>
      </div>
    </>
  );
}

export default App;
