import React from "react";
import { Link } from "react-router-dom";

const Userupload = () => {
  return (
    <>
      <main className="mt-20 h-fit min-h-screen">
        <div className="grid  grid-cols-2 h-screen gap-1 m-4">
          <Link className="bg-green-600 " to="/modeling/add">
            <div
              className="h-full relative hover:before:absolute hover:before:h-full hover:before:w-full hover:before:z-10 hover:before:block hover:before:bg-black hover:before:opacity-40 "
              style={{
                backgroundImage: "url('../../../statics/images/modelinh.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="absolute text-white top-1/3 z-20 w-full  text-center text-xl font-thin ">
                UPLOAD MODELING PICTURES
              </h1>
            </div>
          </Link>
          <Link className="bg-green-600 " to="/poetry/add">
            <div
              className="h-full  relative hover:before:absolute hover:before:h-full hover:before:w-full hover:before:z-10 hover:before:block hover:before:bg-black hover:before:opacity-40 "
              style={{
                backgroundImage: "url('../../../statics/images/books.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="absolute text-white top-1/3 z-20 w-full text-center text-xl font-thin  ">
                UPLOAD POETRY PICTURES
              </h1>
            </div>
          </Link>
          <Link className="bg-green-600 " to="/clothes/add">
            <div
              className="h-full  relative hover:before:absolute hover:before:h-full hover:before:w-full hover:before:z-10 hover:before:block hover:before:bg-black hover:before:opacity-40 "
              style={{
                backgroundImage: "url('../../../statics/images/clothing.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="absolute text-white top-1/3 z-20 w-full text-center text-xl font-thin  ">
                UPLOAD CLOTHING PICTURES
              </h1>
            </div>
          </Link>
          <Link className="bg-green-600 " to="/nature/add">
            <div
              className="h-full  relative hover:before:absolute hover:before:h-full hover:before:w-full hover:before:z-10 hover:before:block hover:before:bg-black hover:before:opacity-40 "
              style={{
                backgroundImage:
                  "url('../../../statics/images/photography.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="absolute text-white top-1/3 z-20 w-full text-center text-xl font-thin  ">
                UPLOAD PHOTOGRAPHY PICTURES
              </h1>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Userupload;
