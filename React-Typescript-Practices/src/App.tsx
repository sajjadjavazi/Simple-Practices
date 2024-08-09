import { SetStateAction, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [text, setText] = useState("");

  const [visible, setVisible] = useState(false);

  const [textArea, setTextArea] = useState("");

  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");


  function handleCount() {
    setCount(count + 1);
  }

  function handleText(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleVisibility() {
    setVisible(!visible);
  }

  const handleTextArea = (e: { target: { value: SetStateAction<string> } }) => {
    setTextArea(e.target.value);
  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }
  function handleSubmit() {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue("");
    }
  }
  function handleDelete(index: string | number) {
    setTodos(todos.filter((_, i) => i !== index));
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
      <div className="flex items-center m-4">
        <textarea
          className="bg-slate-100 p-2 rounded-lg mr-3 overflow-auto w-52 h-24"
          placeholder="write something"
          value={textArea}
          onChange={handleTextArea}
        />
        <p className="bg-amber-400 py-2 px-3 rounded-lg">
          Character count: {textArea.length}
        </p>
      </div>
      <hr />
      <div className="flex items-center m-4">
        <input
          className="mr-3 ml-1 rounded-lg p-2 bg-slate-100"
          type="text"
          placeholder="write your todo"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="bg-slate-500 py-2 px-3 mr-10 text-white rounded-lg"
          onClick={handleSubmit}
        >
          Add
        </button>
        <ul className="flex">
          {todos.map((todo, index) => (
            <li key={index} className="bg-slate-100 mr-6 px-3 py-2 rounded-lg ">
              {todo}
              <button
                className="bg-red-500 py-1 px-2 ml-2 rounded-md"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
