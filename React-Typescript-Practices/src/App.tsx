import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="bg-green-400 py-3 px-10 m-2 rounded-lg">useState</h1>
      </div>
      <div className="m-4 flex items-center">
        <button
          className="bg-slate-500 p-5 mr-3 text-white rounded-lg"
          onClick={handleCount}
        >
          Increment
        </button>
        <p className="bg-amber-400 p-5 rounded-lg">Count: {count}</p>
      </div>
      <hr />
      
    </>
  );
}

export default App;
