import React, { useState } from "react";
import axios from "axios";
const ClothDesignName = () => {
  const [name, setName] = useState("");
  const handleSubmit = async () => {
    const data = { name };
    const response = await axios.post("http://localhost:3500/designame", data);
    console.log(response);
  };
  return (
    <>
      <form>
        <label htmlFor="designName">DESIGN NAME</label>
        <input
          type="text"
          id="designName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button type="button" onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default ClothDesignName;
