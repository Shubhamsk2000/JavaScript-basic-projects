import { useRef } from "react";
import { useState, useCallback, useEffect } from "react";

export default function App() {
  const [length, setLength] = useState(10);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const [reload, setReload] = useState(false);

  const generatPass = useCallback(() => {
    let pass = "";

    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (numAllow === true) str += "123456789";
    if (charAllow === true) str += "!@#$%&?";

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  useEffect(() => {
    generatPass();
  }, [generatPass, length, numAllow, charAllow, reload]);

  const passref = useRef(null);

  const copyText = () => {
    passref.current?.select();
    window.navigator.clipboard.writeText(password);
    alert(`Copied to clipboard: ${password} `);
    
  };

  return (
    <div className="flex justify-center">
      <div className="border-2  flex flex-col text-center my-12 rounded-xl p-6 w-2/3">
        <h1 className="text-4xl mb-8">Password Generator</h1>
        <div className="copy-container relative">
          <input
            type="text"
            placeholder="Password"
            value={password}
            readOnly
            ref={passref}
            className="py-2 px-4 text-xl  text-black w-96 rounded-l-lg "
          />
          <button
            className="copy px-4 bg-blue-600 active:bg-blue-800 py-2 text-xl shadow-lg rounded-r-lg "
            onClick={copyText}
          >
            Copy
          </button>
          <button
            onClick={() => setReload((prev) => !prev)}
            className="px-4 bg-blue-600 active:bg-blue-800 py-2 mx-2 text-xl shadow-lg rounded-lg"
          >
            Reload
          </button>
        </div>
        <div className="flex gap-8 text-xl my-8 justify-center text-orange-500">
          <div className="flex gap-4">
            <label htmlFor="range">Length: {length}</label>
            <input
              type="range"
              name=""
              min={4}
              max={40}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name=""
              className="w-4"
              value={numAllow}
              onChange={() => setNumAllow((prev) => !prev)}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name=""
              className="w-4"
              value={charAllow}
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="">Special Keys</label>
          </div>
        </div>
      </div>
    </div>
  );
}
