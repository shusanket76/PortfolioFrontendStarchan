import React from "react";
import { useParams } from "react-router-dom";
import { selectClothesById } from "../clothes/clothesApiSlice";
import { useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SingleClothingImage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const singlemodelingPost = useSelector((state) =>
    selectClothesById(state, id)
  );

  const singleImageLink = singlemodelingPost?.imageLink;

  return (
    <main>
      <button
        className="absolute top-4 right-5 text-2xl text-white z-50"
        onClick={() => navigate("/clothes")}
      >
        <FaTimes />
      </button>
      <div
        style={{
          backgroundImage: "url(" + `${singleImageLink}` + ")",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute z-40 bg-black h-screen w-full"
      ></div>
    </main>
  );
};

export default SingleClothingImage;
