import React, { useState } from "react";

export default function Salutations(props) {
  const { greeting } = props.values;
  const [location, setLocation] = useState(props.values.location);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(inputValue);
  };
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
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {/* {CONDITIONAL RENDERING EXAMPLE} */}
      {/* {location === "admin" ? <p>Welcome Admin!</p> : <p>Happy New Year!</p>} */}

      {/* {circuit breaker example} */}
      {greeting === "hello" && <p>Welcome User!</p>}
    </div>
  );
}
