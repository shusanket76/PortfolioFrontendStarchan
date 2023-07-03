import React from "react";
import { useState } from "react";
import axios from "axios";

const PoetryForm = () => {
  const [coverImageLinks, setCoverImageLinks] = useState();
  const [bookname, setBookName] = useState("");
  const [mainImageLink, setMainImageLink] = useState("");
  const [description, setDescription] = useState("");
  const [linkofBook, setLinkofBook] = useState("");

  const handleCoverImage = async (e) => {
    setCoverImageLinks(e.target.files);
  };
  const removeCoverImages = () => {
    setCoverImage({});
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("mainImageLink", mainImageLink);
    formData.append("bookname", bookname);
    formData.append("description", description);
    formData.append("linkofBook", linkofBook);

    for (let i = 0; i < coverImageLinks.length; i++) {
      formData.append("coverImageLinks", coverImageLinks[i]);
    }

    try {
      const res = await axios.post("http://localhost:3500/poetry", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* 
      <div>
        <form>
          <label htmlFor="bookname">NAME OF BOOK</label>
          <input
            type="text"
            id="bookname"
            value={bookname}
            onChange={(e) => setBookName(e.target.value)}
          ></input>
          <label htmlFor="main-image">MAIN IMAGE</label>
          <input
            id="main-image"
            type="file"
            onChange={(e) => setMainImageLink(e.target.files[0])}
          ></input>
          <label htmlFor="coverimages">COVER IMAGE</label>
          <input
            id="coverimages"
            type="file"
            onChange={handleCoverImage}
            multiple
          ></input>
           <p>{coverImages.length} files selected</p> 
          <button type="button" onClick={removeCoverImages}>
            Remove all files
          </button>
          <label htmlFor="description">DESCRIPTION</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            ></input>
          <label htmlFor="linkofbook">LINK OF BOOK</label>
          <input
            type="text"
            id="linkofbook"
            value={linkofBook}
            onChange={(e) => setLinkofBook(e.target.value)}
            ></input>
          <button type="button" onClick={handleSubmit}>
            {" "}
            SUBMIT{" "}
          </button>
        </form>
      </div>
      
    */}
      <main className="bg-red-500 h-screen mt-20 grid items-center justify-center">
        <h1 className="text-3xl text-white">WORKING ON IT!!</h1>
      </main>
    </>
  );
};

export default PoetryForm;
