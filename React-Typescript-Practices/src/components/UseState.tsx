import { SetStateAction, useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  const [text, setText] = useState("");

  const [visible, setVisible] = useState(false);

  const [textArea, setTextArea] = useState("");

  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const [color, setColor] = useState("");

  const [search, setSearch] = useState("");
  const items = [
    "Apple",
    "Banana",
    "Carrot",
    "Date",
    "Eggplant",
    "Fig",
    "Grape",
  ];
  const filterdItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  // Increment function
  function handleCount() {
    setCount(count + 1);
  }

  //Text input function
  function handleText(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  //Toggle function
  function handleVisibility() {
    setVisible(!visible);
  }

  //Textarea length counter
  const handleTextArea = (e: { target: { value: SetStateAction<string> } }) => {
    setTextArea(e.target.value);
  };

  //Todo functions
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

  //Color Switcher
  function handleColorSwitch(e: React.ChangeEvent<HTMLSelectElement>) {
    setColor(e.target.value);
  }

  //Search filter
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="bg-green-400 py-3 px-10 m-2 rounded-lg">useState</h1>
      </div>
      {/* Increment */}
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
      {/* Text input */}
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
      {/* Show/Hide Toggle */}
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
      {/* Textarea lenght counter */}
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
      {/* Todo mini app */}
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
      <hr />
      {/* Color switcher */}
      <div className="flex items-start m-4">
        <select
          onChange={handleColorSwitch}
          className="rounded-md px-4 py-2 mr-10 bg-slate-100"
        >
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">yellow</option>
          <option value="purple">purple</option>
          <option value="brown">brown</option>
        </select>
        <div
          className="w-96 h-28 border-black border rounded-lg"
          style={{ background: color }}
        ></div>
      </div>
      <hr />
      {/* Search filter */}
      <div className="flex items-start m-4">
        <input
          type="text"
          onChange={handleSearch}
          className="bg-slate-100 px-3 py-2 rounded-lg mr-4"
          placeholder="Search your item"
        />
        <ul className="flex">
          {filterdItems.map((item, index) => (
            <li key={index} className="mr-3 bg-amber-400 p-2 rounded-lg">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default UseState;
