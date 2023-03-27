import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SplashScreenLoader from "./SplashScreenLoader";
import "./styles.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [removeLoader, setRemoveLoader] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setRemoveLoader("fadeOut");
    }, 1000);
  }, []);

  return (
    <div>
      <h1>CodeSandbox</h1>
      {isLoading && (
        <SplashScreenLoader setIsLoading={setIsLoading} anim={removeLoader} />
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
