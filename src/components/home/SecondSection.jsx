import React from "react";
import { selectAllClothesData } from "../clothes/clothesApiSlice";
import { selectAllModelingData } from "../modeling/modelingApiSlice";
import { selectAllNatureData } from "../nature/natureApiSlice";
import { selectAllPoetryData } from "../poetry/poetryApiSlice";
import { useSelector } from "react-redux";
import "../../../statics/css/SecondSection.css";
import { useNavigate } from "react-router-dom";

const SecondSection = () => {
  const navigate = useNavigate();
  const allClothesData = useSelector(selectAllClothesData);
  const allModelingData = useSelector(selectAllModelingData);
  const allNatureData = useSelector(selectAllNatureData);
  const allPoetryData = useSelector(selectAllPoetryData);
  const clothimageLink = allClothesData ? allClothesData[0]?.imageLink : null;
  const modelingimageLink = allModelingData
    ? allModelingData[1]?.imageLink
    : null;
  const natureimageLink = allNatureData ? allNatureData[0]?.imageLink : null;
  const poetryimageLink = allPoetryData
    ? allPoetryData[0]?.mainImageLink
    : null;

  return (
    <main className="w-full h-auto ">
      <div className=" h-min text-2xl text-center mt-10 font-thin md:text-3xl">
        VIEW MY WORK
      </div>
      <div className="  bg-white grid grid-cols-1 gap-2  py-20  md:grid-cols-3">
        <div
          onClick={() => {
            navigate("/modeling");
          }}
          style={{
            backgroundImage: "url(" + `${modelingimageLink}` + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className=" cursor-pointer second-section-hovereffect relative md:row-start-1 md:row-end-3 md:h-full  mx-10 h-60 hover:before:bg-black hover:before:absolute hover:before:z-10 hover:before:block hover:before:h-full hover:before:w-full hover:before:opacity-40"
        >
          <h1 className="text-white absolute z-20 top-0 left-0 bottom-0 right-0  grid items-center justify-center font-thin text-xl">
            MODELING
          </h1>
        </div>
        <div
          style={{
            backgroundImage: "url(" + `${natureimageLink}` + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => {
            navigate("/nature");
          }}
          className=" cursor-pointer second-section-hovereffect  relative mx-10  h-60   hover:before:bg-black hover:before:absolute hover:before:z-10 hover:before:block hover:before:h-full hover:before:w-full hover:before:opacity-40 "
        >
          <h1 className="text-white absolute z-20 top-0 left-0 bottom-0 right-0  grid items-center justify-center text-xl font-thin">
            PHOTOGRAPHY
          </h1>
        </div>
        <div
          onClick={() => navigate("/poetry")}
          style={{
            backgroundImage: "url(" + `${poetryimageLink}` + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className=" cursor-pointer second-section-hovereffect  relative md:row-start-1 md:row-end-3 md:col-start-3   md:h-full  mx-10 h-60  hover:before:bg-black hover:before:absolute hover:before:z-10 hover:before:block hover:before:h-full hover:before:w-full hover:before:opacity-40 "
        >
          <h1 className="text-white absolute z-20 top-0 left-0 bottom-0 right-0  grid items-center justify-center text-xl  font-thin">
            POETRY
          </h1>
        </div>
        <div
          style={{
            backgroundImage: "url(" + `${clothimageLink}` + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => {
            navigate("/clothes");
          }}
          className=" cursor-pointer second-section-hovereffect relative mx-10 h-60    hover:before:bg-black hover:before:absolute hover:before:z-10 hover:before:block hover:before:h-full hover:before:w-full hover:before:opacity-40  "
        >
          <h1 className="text-white absolute z-20 top-0 left-0 bottom-0 right-0  grid items-center justify-center text-xl  font-thin">
            CLOTHING
          </h1>
        </div>
      </div>
    </main>
  );
};

export default SecondSection;
