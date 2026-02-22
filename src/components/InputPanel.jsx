// InputPanel.jsx
import { useState, useRef } from "react";

const InputPanel = () => {
  const [controlledValue, setControlledValue] = useState("");
  const uncontrolledRef = useRef();

  const handleUncontrolled = () => {
    alert("Uncontrolled Input Value: " + uncontrolledRef.current.value);
  };

  return (
    <div className="mt-8 space-y-6">

     
      <div>
        <h3 className="font-semibold text-orange-700">
          Controlled Input
        </h3>
        <input
          type="text"
          value={controlledValue}
          onChange={(e) => setControlledValue(e.target.value)}
          className="w-full p-2 rounded-lg border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Type something..."
        />
        <p className="mt-2 text-sm text-orange-600">
          Live Value: {controlledValue}
        </p>
      </div>

      
      <div>
        <h3 className="font-semibold text-orange-700">
          Uncontrolled Input
        </h3>
        <input
          type="text"
          ref={uncontrolledRef}
          className="w-full p-3 rounded-xl border border-yellow-400 
           focus:outline-none focus:ring-2 focus:ring-orange-400 
           bg-white shadow-sm"

          placeholder="Type and click button..."
        />
        <button
          onClick={handleUncontrolled}
          className="mt-3 px-6 py-2 bg-orange-500 text-white 
           rounded-xl shadow-md hover:bg-orange-600 
           transition-all duration-300"

        >
          Show Value
        </button>
      </div>

    </div>
  );
};

export default InputPanel;
