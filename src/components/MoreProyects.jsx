import React from "react";

const MoreProyects = ({changeProyectPage, currentPageProyects, totalPagesProyects }) => {
    const arrowDirection = currentPageProyects >= 1 && currentPageProyects < totalPagesProyects ? 'rotate-0' : 'rotate-180'
  return (
    <span
      className="down sm:block text-center cursor-pointer right-auto lg:block sm:absolute bottom-12 sm:top-1/2 sm:right-5 lg:right-20 2xl:right-20"
      onClick={changeProyectPage}
    >
      <i
        className={`bx bx-chevron-right  ${arrowDirection} bx-md border rounded-full bg-white text-black transition ease-in duration-200`}
      ></i>
    </span>
  );
};

export default MoreProyects;
