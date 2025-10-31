import React, { useState } from "react";

export default function App(props) {
  const [location, setLocation] = useState(props.location);
  const [inputValue, setInputValue] = useState("");

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
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setLocation(inputValue);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
