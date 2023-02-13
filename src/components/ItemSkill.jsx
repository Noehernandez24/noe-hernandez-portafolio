import React from "react"


const ItemSkill = ({color, icon, title, isHidden}) => {
  const show = isHidden ? "hidden" : "block";
  

  return (
    <div className={`${show} lg:flex flex items-center gap-6 fade-in-left`}>
      <div className={`flex justify-center items-center`}>
        <i className={` ${color}  text-white dark:border-2 border-black dark:border-white rounded-full ${icon} bx-lg p-3 sm:p-5`}></i>
      </div>

      <div className="h-6 w-full sm:w-44  rounded-lg border-2 border-black dark:border-white">
        <div className={`div h-full w-2/4 ${color} rounded-lg`}></div>
        <h2 className="text-center py-3 lg:text-lg">{title}</h2>
      </div>
    </div>
  );
};

export default ItemSkill;
