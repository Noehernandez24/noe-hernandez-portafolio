import React from "react";

const Education = ({ logo, title, date, animation, uesColor, url }) => {
  const eduClass =
    "flex flex-col gap-4 relative bg-card rounded-lg text-center font-title py-5 px-2 mb-11 cursor-pointer h-32 justify-center lg:h-40 lg:text-lg text-white hover:-translate-y-2 transition-transform duration-300";
  return (
    <a href={url} target={"_blank"}>
      <div className={eduClass}>
        {animation && (
          <span className="inline-block w-2 h-2 bg-red-400 rounded-full absolute top-2 right-2 animate-ping"></span>
        )}
        <img
          className={`education-logo w-10 lg:w-12 absolute -top-7 left-2/4 ${uesColor}`}
          src={logo}
          alt=""
        />
        <h3>{title}</h3>
        <p>({date})</p>
      </div>
    </a>
  );
};

export default Education;
