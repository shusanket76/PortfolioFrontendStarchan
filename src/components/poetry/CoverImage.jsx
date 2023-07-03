import React from "react";
import { selectPoetryById } from "./poetryApiSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CoverImage = () => {
  const { id } = useParams();
  const post = useSelector((state) => selectPoetryById(state, id));
  const coverImages = post?.coverImageLinks;
  let content;

  content = coverImages?.length
    ? coverImages.map((singleImage, i) => (
        <img key={i} className=" h-56  w-full object-cover" src={singleImage} />
      ))
    : null;
  return <main className=" h-fit grid grid-cols-3">{content}</main>;
};

export default CoverImage;
