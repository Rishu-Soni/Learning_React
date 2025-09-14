import { useState, useEffect, useCallback, use } from "react";
import "./App.css";

function App() {
  let [copyValue, setcopyValue] = useState("copy");
  let [length, setlength] = useState(8);
  let [numaricValue, setnumaricValue] = useState(false);
  let [symbolValue, setsymbolValue] = useState(false);
  let [password, setpassword] = useState("here is the password");

  function GeneratePassword() {
    let allChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";

    if (numaricValue) {
      allChar += "0123456789";
    }
    if (symbolValue) {
      allChar += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    for (let i = 0; i < length; i++) {
      pass += allChar.charAt(Math.floor(Math.random() * allChar.length));
    }
    setpassword(pass);
  }

  useCallback(GeneratePassword, [numaricValue, symbolValue, length]);

  useEffect(() => {
    GeneratePassword();
  }, [numaricValue, symbolValue, length]);

  return (
    <div className="mainContainer">
      <div className="upperDiv">
        <input type="text" value={password} readOnly />
        <button
          className="copyBotton"
          onClick={() => {
            setcopyValue("Done");
            setTimeout(() => {
              setcopyValue("copy");
            }, 1000);
          }}
        >
          {copyValue}
        </button>
      </div>
      <div className="lowerDiv">
        <input
          type="range"
          name="length"
          className="slidRange"
          min={1}
          max={100}
          value={length}
          onChange={(e) => {
            setlength(e.target.value);
          }}
        />
        <label htmlFor="length">Length {length}</label>
        <input
          type="checkbox"
          name="numaricValue"
          className="numaricCheckbox"
          checked={numaricValue}
          onChange={() => {
            setnumaricValue((prev) => !prev);
          }}
        />
        <label htmlFor="numaricValue">Numbers</label>
        <input
          type="checkbox"
          name="symbolValue"
          className="charCheckbox"
          checked={symbolValue}
          onChange={() => {
            setsymbolValue((prev) => !prev);
          }}
        />
        <label htmlFor="symbolValue">Symbols</label>
      </div>
    </div>
  );
}

export default App;
