import React from "react";
import '../styles/loader.css'

const Loader = () => {
  return (
    <div className="fixed min-h-screen w-full bg-body z-50 flex justify-center items-center">
    <div className="loader">
      <div className="loader-square bg-body dark:bg-white"></div>
      <div className="loader-square bg-body dark:bg-white"></div>
      <div className="loader-square bg-body dark:bg-white"></div>
      <div className="loader-square bg-body dark:bg-white"></div>
      <div className="loader-square bg-body dark:bg-white"></div>
      <div className="loader-square bg-body dark:bg-white"></div>
      <div className="loader-square bg-body dark:bg-white"></div>
    </div>

    </div>
  );
};

export default Loader;
