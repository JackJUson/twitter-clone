import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Picker from "@emoji-mart/react";
import { useRef, useState } from "react";

function Input() {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectFile] = useState(null);
  const filePickerRef = useRef(null);
  const [showEmoji, setShowEmoji] = useState(false);

  const addImage = () => {};

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

        {selectedFile && (
          <div className="relative">
            <div
              className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26]
          bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1
          cursor-pointer"
              onClick={() => setSelectFile(null)}
            >
              <XMarkIcon className="text-white h-5" />
            </div>
            <img
              src={selectedFile}
              alt=""
              className="rounded-2xl max-h-80 object-contain"
            />
          </div>
        )}

        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <div className="icon" onClick={() => filePickerRef.current.click()}>
              <PhotoIcon className="h-[22px] text-[#1d9bf0]" />
              <input
                type="file"
                hidden
                onChange={addImage}
                ref={filePickerRef}
              />
            </div>
            <div className="icon rotate-90">
              <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
            </div>

            <div className="icon" onClick={() => setShowEmoji(!showEmoji)}>
              <FaceSmileIcon className="text-[#1d9bf0] h-[22px]" />
            </div>

            <div className="icon">
              <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
            </div>

            {showEmoji && (
              <Picker
                // onSelect={addEmoji}
                // style={{
                //   position: "absolute",
                //   marginTop: "465px",
                //   marginLeft: -40,
                //   maxWidth: "320px",
                //   borderRadius: "20px",
                // }}
                theme="dark"
              />
            )}
          </div>
          <button
            className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 
            font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] 
            disabled:opacity-50 disabled:cursor-default"
            disabled={!input.trim() && !selectedFile}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
export default Input;
