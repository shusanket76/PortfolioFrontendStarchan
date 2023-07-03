import React from "react";
import { selectClothesById } from "./clothesApiSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SingleCloth = ({ clothId }) => {
  const post = useSelector((state) => selectClothesById(state, clothId));
  return (
    <Link to={`singleImage/${post.id}`}>
      <div
        style={{
          backgroundImage: "url(" + `${post.imageLink}` + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative h-96 w-64 cursor-pointer hover:before:bg-orange-300 hover:before:absolute hover:before:z-10 hover:before:block hover:before:h-full hover:before:w-full hover:before:opacity-40"
      ></div>
    </Link>
  );
};

export default SingleCloth;
