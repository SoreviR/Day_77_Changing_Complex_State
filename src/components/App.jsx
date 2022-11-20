import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFullName((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          value={fullName.fName}
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={fullName.lName}
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
