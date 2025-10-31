import React, { useState } from "react";
export default function App(props) {
  const [location, setLocation] = useState(props.location);
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(inputValue);
  };

  const { greeting } = props;
  return (
    <div>
      <p>
        {greeting} from {location}!
      </p>
      <br />
      <form>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button
          type="button"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
