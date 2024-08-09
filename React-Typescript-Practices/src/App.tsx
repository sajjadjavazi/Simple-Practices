import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  function handleCount() {
    setCount(count + 1);
  }

  function handleText(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleVisibility() {
    setVisible(!visible);
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="bg-green-400 py-3 px-10 m-2 rounded-lg">useState</h1>
      </div>
      <div className="m-4 flex items-center">
        <button
          className="bg-slate-500 p-3 mr-3 text-white rounded-lg"
          onClick={handleCount}
        >
          Increment
        </button>
        <p className="bg-amber-400 p-3 rounded-lg">Count: {count}</p>
      </div>
      <hr />
      <div className="flex items-center m-4">
        <label htmlFor="#">write something:</label>
        <input
          className="mr-3 ml-1 rounded-lg p-2 bg-slate-100"
          type="text"
          value={text}
          onChange={handleText}
        />
        <p className="bg-amber-400 py-2 px-3 rounded-lg">Input text: {text}</p>
      </div>
      <hr />
      <div className="flex items-center m-4">
        <button
          className="bg-slate-500 py-2 px-3 mr-3 text-white rounded-lg"
          onClick={handleVisibility}
        >
          Show/Hide Text
        </button>
        {visible && (
          <p className="bg-amber-400 py-2 px-3 rounded-lg">Toggle me!</p>
        )}
      </div>
      <hr />

    </>
  );
}

export default App;
