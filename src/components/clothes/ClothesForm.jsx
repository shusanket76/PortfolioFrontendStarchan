import React, { useState } from "react";
import { selectAllClothDesignData } from "./clothDesignApiSlice";
import { useSelector } from "react-redux";

import axios from "axios";

const ClothesForm = () => {
  const [imageLink, setImageLink] = useState("");
  const res = useSelector((state) => selectAllClothDesignData(state));
  const [clothDesignId, setClothDesignId] = useState("");
  const handleSubmit = async () => {
    const formdata = new FormData();
    formdata.append("imageLink", imageLink);
    formdata.append("clothDesignId", clothDesignId);

    try {
      const res = await axios.post("http://localhost:3500/clothes", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // ({ image: imageFile });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const handeDesignName = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setClothDesignId(value.toString());
  };

  const designOption = res.map((clothDname) => (
    <option key={clothDname.id} value={clothDname.id}>
      {clothDname.name}
    </option>
  ));

  return (
    <>
      <main className="mt-20 h-fit">
        <div className="grid justify-center bg-gradient-to-br from-red-500 to-red-800 text-white p-4">
          <h1 className=" text-center text-2xl mt-7 font-thin">
            ADD CLOTHING PICTURES
          </h1>
          <label className="mt-7 pl-5">DESIGN </label>
          <select
            className="h-10 p-5 rounded-md text-black  w-3/4"
            onChange={handeDesignName}
          >
            <option value=""></option>
            {designOption}
          </select>
          <div className="pl-5  grid">
            <label className="mt-5">CHOSE AN IMAGE </label>
            <input
              type="file"
              className=" rounded-md"
              onChange={(e) => setImageLink(e.target.files[0])}
            ></input>
          </div>

          <div className="grid justify-center">
            <button
              className="mt-3 bg-white p-2 text-black rounded-md hover:font-bold  "
              type="button"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ClothesForm;
