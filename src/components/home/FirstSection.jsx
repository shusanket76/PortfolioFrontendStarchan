import React, { useState } from "react";
import { selectAllNatureData } from "../nature/natureApiSlice";
import { useSelector } from "react-redux";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const FirstSection = () => {
  const allPosts = useSelector(selectAllNatureData);
  const [imageId, setImageId] = useState(0);

  const content = allPosts ? allPosts[imageId]?.imageLink : null;

  const leftButton = () => {
    setImageId((imageId) => {
      let newImageId = imageId - 1;
      if (newImageId < 0) {
        return allPosts.length - 1;
      }
      return newImageId;
    });
  };

  const rightButton = () => {
    setImageId((imageId) => {
      let newImageId = imageId + 1;
      if (newImageId > allPosts.length - 1) {
        return 0;
      }
      return newImageId;
    });
  };

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + `${content}` + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="before:bg-black before: before:absolute before:z-10 before:block before:h-full before:w-full before:opacity-25 bg-white h-screen w-full ease-in-out duration-75"
      >
        <button
          className="absolute top-2/3  left-2 z-20 text-white text-2xl"
          onClick={leftButton}
        >
          <FaAngleLeft />
        </button>

        <button
          className="absolute top-2/3 text-white right-2 z-20 text-2xl"
          onClick={rightButton}
        >
          <FaAngleRight />
        </button>
        <div className=" text-white absolute top-1/2 right-16 left-16  text-center  z-20 ">
          <h1 className="text-3xl  font-thin md:text-4xl">
            Rickey Starchan Portfolio
          </h1>
          <p className="text-2xl mt-9 font-thin md:text-3xl ">
            These are some interesting stuff about me! I hope to work with you
            very soon!
          </p>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
