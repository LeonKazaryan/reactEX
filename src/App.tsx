import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function App() {
  let [text, setText] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  let [isError, setisError] = useState(true);
  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            console.log(text);
            if (e.target.value.length >= 5) {
              setErrorMessage("");
              setisError(false);
            } else {
              let resultBlock = document.getElementById("result_container");
              setErrorMessage(
                "Input text should contain at least 5 characters"
              );
              setisError(true);
              if (resultBlock) {
                if (!isError) {
                  resultBlock.style.display = "none";
                }
              }
            }
          }}
          onBlur={(e) => {
            if (e.target.value.length >= 5) {
              setErrorMessage("");
              setisError(false);
            } else {
              let resultBlock = document.getElementById("result_container");
              setErrorMessage(
                "Input text should contain at least 5 characters"
              );
              setisError(true);
              if (resultBlock) {
                if (!isError) {
                  resultBlock.style.display = "none";
                }
              }
            }
          }}
        />
        <Button
          variant="primary"
          disabled={isError}
          onClick={(e) => {
            e.preventDefault();
            let resultBlock = document.getElementById("result_container");
            if (resultBlock) {
              if (!isError) {
                resultBlock.style.display = "block";
              }
            }
          }}
        >
          Get result
        </Button>
      </div>
      <div>{errorMessage}</div>
      <div
        id="result_container"
        style={{
          display: "none"
        }}
      >
        Result: {text}
      </div>
    </div>
  );
}

export default App;
