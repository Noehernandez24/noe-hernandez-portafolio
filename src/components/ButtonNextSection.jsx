import React from "react";

const ButtonNextSection = ({section}) => {
  return (
    <>
    {/* <a href={`#${section}`} className="down block text-center sm:hidden">
      <i className="bx bx-chevron-down bx-md border rounded-full bg-black text-white dark:bg-white dark:text-black"></i>
    </a> */}

    <a href={`#${section}`} className="down text-center w-10 mx-auto hidden sm:block">
      <i className="bx bx-chevron-down bx-lg border rounded-full bg-black text-white dark:bg-white dark:text-black hover:scale-110 transition-transform  duration-500"></i>
    </a>
    </>
  );
};

export default ButtonNextSection;
