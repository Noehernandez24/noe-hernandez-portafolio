import React from 'react';

const Proyects = ({image, title, description, side, url}) => {
    return (
      <div className='fade-in-left'>
        <div className=" group image-container w-full max-w-30 relative cursor-grab overflow-hidden">
          <img className="rounded-lg " src={image} />
          <div className="absolute transition-all duration-300 ease-in -top-80 h-full w-full  group-hover:top-0 group-hover:right-0 group-hover:left-0 group-hover:bottom-0 flex justify-center flex-col items-center bg-overlay text-center text-white sm:px-5 gap-2">
            <h2 className="text-xl xl:text-2xl uppercase font-bold">{title}</h2>
            <p className="xl:text-lg font-roboto">{description}</p>
            <a href={url} target='_blank' className="xl:text-lg uppercase font-bold hover:bg-slate-800 bg-black py-1 px-3 xl:py-2 xl:px-4 cursor-pointer">
                Ver proyecto
            </a>
            
          </div>
          <span className='border border-dashed absolute top-4 -right-3 bg-secondary rounded-md p-1 uppercase dark:bg-black dark:text-primary font-bold rotate-45 text-sm'>{side}</span>
        </div>
      </div>
    );
};

export default Proyects;