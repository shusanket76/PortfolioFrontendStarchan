import React from "react";
import { useSelector } from "react-redux";
import { selectNaturePostById } from "./natureApiSlice";
import { Link } from "react-router-dom";

const SingleNature = ({ postId }) => {
  const post = useSelector((state) => selectNaturePostById(state, postId));

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

export default SingleNature;
