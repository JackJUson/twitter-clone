import { useState } from "react";

function Input() {
  const [input, setInput] = useState();

  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3
    overflow-y-scroll scrollbar-hide`}
    >
      <img
        src="https://avatars.githubusercontent.com/u/108652931?v=4"
        alt=""
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-700">
        <div className={``}>
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            rows="2"
            placeholder="What's happening?"
            className="bg-transparent outline-none text-[#d9d9d9] text-lg
             placeholder-gray-500 tracking-wide w-full min-h-[50px] scrollbar-hide"
          />
        </div>
        <div>Hello</div>
      </div>
    </div>
  );
}
export default Input;
