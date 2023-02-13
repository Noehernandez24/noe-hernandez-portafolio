import React from "react";

const MoreBtn = ({changeSkillPage, currentPage, totalPages}) => {
    const arrowDirection = currentPage >= 1 && currentPage < totalPages ? 'rotate-0' : 'rotate-180'
  return (
    <span
      className="down text-center cursor-pointer right-auto lg:block absolute bottom-20 sm:top-1/2 sm:right-28 lg:right-32 2xl:right-80"
      onClick={changeSkillPage}
    >
      <i className={`bx bx-chevron-right  ${arrowDirection} bx-md border rounded-full bg-white text-black transition ease-in duration-200`}></i>
    </span>
  );
};

export default MoreBtn;
