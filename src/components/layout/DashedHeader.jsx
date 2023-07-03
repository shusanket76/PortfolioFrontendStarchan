import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const DashedHeader = () => {
  const [color, setColor] = useState(false);
  const [home, setHome] = useState(true);
  const [showSmallNav, setShowSmallNav] = useState(false);

  useEffect(() => {
    setShowSmallNav((prev) => !prev);
    if (window.location.pathname !== "/") {
      setHome(false);
    } else {
      setHome(true);
    }
  }, [window.location.pathname]);

  let listener = null;

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;

      if (scrolled > 50) {
        setColor(true);
      } else {
        setColor(false);
      }
    });
  }, [color]);

  const navigate = useNavigate();
  return (
    // <main>
    <section
      className={
        home
          ? color
            ? "fixed top-0 left-0 right-0 flex justify-between z-40  py-5 px-4 bg-white text-black ease-out duration-1000"
            : "fixed top-0 left-0 right-0 flex justify-between z-30  py-5 px-4 text-white  ease-in duration-300 "
          : "fixed top-0 left-0 right-0 flex justify-between z-30  py-5 px-4 text-black ease-in duration-300 bg-white "
      }
    >
      <div className="">
        <h1
          className="text-2xl font-thin cursor-pointer sm:text-2xl"
          onClick={() => navigate("/")}
        >
          RICKEY STARCHAN
        </h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex text-lg">
          <Link to={"/modeling"}>
            <li className="pl-10 font-thin">MODELING</li>
          </Link>
          <Link to={"/nature"}>
            <li className="pl-10 font-thin">PHOTOGRAPHY</li>
          </Link>
          <Link to={"/clothes"}>
            <li className="pl-10 font-thin">CLOTHING</li>
          </Link>
          <Link to="/poetry">
            <li className="pl-10 font-thin">POETRY</li>
          </Link>
          {/* <Link to="/userupload">
            <li className="pl-10 font-thin">UPLOAD</li>
          </Link> */}
        </ul>
      </div>
      <div className="">
        <button
          className="text-2xl md:hidden"
          onClick={() => setShowSmallNav((prev) => !prev)}
        >
          &#9776;
        </button>
      </div>
      {showSmallNav && (
        <div className=" bg-transparent backdrop-blur-xl absolute top-0 left-0 h-screen w-full md:hidden">
          <button
            className="absolute top-5 right-5 text-2xl"
            onClick={() => setShowSmallNav((prev) => !prev)}
          >
            <FaTimes />
          </button>{" "}
          <ul className="grid  justify-center mt-64 text-2xl">
            <Link to={"/modeling"}>
              <li className=" font-thin hover:bg-black hover:text-white w-fit p-1 rounded-lg ">
                MODELING
              </li>
            </Link>
            <Link to={"/nature"}>
              <li className=" font-thin mt-5 hover:bg-black hover:text-white w-fit p-1 rounded-lg">
                PHOTOGRAPHY
              </li>
            </Link>
            <Link to={"/clothes"}>
              <li className=" font-thin mt-5 hover:bg-black hover:text-white w-fit p-1 rounded-lg ">
                CLOTHING
              </li>
            </Link>
            <Link to="/poetry">
              <li className=" font-thin mt-5 hover:bg-black hover:text-white w-fit p-1 rounded-lg ">
                POETRY
              </li>
            </Link>
            {/* <Link to="/userupload">
            <li className="pl-10 font-thin">UPLOAD</li>
          </Link> */}
          </ul>
        </div>
      )}
    </section>

    // </main>
  );
};

export default DashedHeader;
