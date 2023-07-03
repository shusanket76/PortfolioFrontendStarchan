import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const DashedFooter = () => {
  return (
    <main className=" grid justify-center p-5">
      <div className="flex  justify-between">
        <button className="text-2xl text-red-700">
          <FaInstagram />
        </button>
        <button className="text-2xl text-blue-400">
          <FaTwitter />
        </button>
        <button className="text-2xl text-blue-900">
          <FaLinkedin />
        </button>
        <button className="text-2xl text-blue-600">
          <FaFacebook />
        </button>
      </div>
      <div className="font-thin pt-2">RICKEY STRACHAN</div>
      <div className="font-thin pl-1">DEVELOPED BY 8</div>
    </main>
  );
};

export default DashedFooter;
