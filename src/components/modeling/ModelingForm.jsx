import React from "react";
import { useState } from "react";
import axios from "axios";

const ModelingForm = () => {
  const [imageLink, setImageLink] = useState({});
  const [photographer, setPhotographer] = useState("");

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    setImageLink(file);
  };
  const handleSubmit = async () => {
    const formdata = new FormData();
    formdata.append("photographer", photographer);
    formdata.append("imageLink", imageLink);

    try {
      const res = await axios.post(
        "https://portfolio-470r.onrender.com/modeling",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // ({ image: imageFile });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <main className="mt-20 h-fit  ">
        <div className=" grid justify-center bg-gradient-to-br from-blue-500 to-purple-900 text-white p-2">
          <h1 className=" text-center text-2xl mt-7 font-thin">
            ADD MODELING PICTURES
          </h1>
          <label className="mt-7 pl-5" htmlFor="nameofphotographer">
            NAME OF PHOTOGRAPHER
          </label>
          <input
            type="text"
            className="h-10 p-5 rounded-md text-black  w-3/4"
            value={photographer}
            onChange={(e) => setPhotographer(e.target.value)}
          ></input>
          <div className="mt-5 grid">
            <label className="pl-5" htmlFor="clothimage">
              CHOSE AN IMAGE
            </label>
            <input
              type="file"
              className=" rounded-md "
              accept="image/png, image/jpg, image/jpeg, image/webp"
              onChange={(e) => handleImagePreview(e)}
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

export default ModelingForm;
