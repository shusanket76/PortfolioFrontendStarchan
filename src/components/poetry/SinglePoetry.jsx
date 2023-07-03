import React from "react";
import { useSelector } from "react-redux";
import { selectPoetryById } from "./poetryApiSlice";
import CoverImage from "./CoverImage";
import { Link } from "react-router-dom";
import "../../../statics/css/SinglePoetry.css";

const SinglePoetry = ({ postId }) => {
  const post = useSelector((state) => selectPoetryById(state, postId));

  return (
    <>
      <Link to={`singlePoetry/${post.id}`}>
        <main className="singlePoetryMain cursor-pointer grid border-2 border-gray-300  w-96 justify-center gap-3 p-5 hover:bg-slate-200 ">
          <div className="text-3xl font-thin text-center">{post.bookname}</div>
          <div
            style={{
              backgroundImage: "url(" + `${post.mainImageLink}` + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="h-96 w-96"
          ></div>
          <div className="font-thin text-1xl">{post.description}</div>
        </main>
      </Link>
    </>
  );
};

export default SinglePoetry;
