import React from "react";
import CoverImage from "./CoverImage";
import { useParams } from "react-router-dom";
import { selectPoetryById } from "./poetryApiSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SinglePoetryInformation = () => {
  const { id } = useParams();
  const post = useSelector((state) => selectPoetryById(state, id));
  return (
    <main className="mt-20  h-fit w-full p-5 ">
      <div className="text-3xl font-thin text-center">{post.bookname}</div>
      <div className=" h-fit w-full mt-6  ">
        <CoverImage />
      </div>
      <p className="text-center pt-5">{post.description}</p>
      <Link to={post.link}> LINK OF BOOK</Link>
    </main>
  );
};

export default SinglePoetryInformation;
