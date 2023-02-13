import React, { useEffect, useState } from 'react';


const IndexNavigate = () => {
    const [indexActive, setIndexActive] = useState(1);
    const IndexValues = [
      {
        section: "home",
        value: 1,
      },
      {
        section: "about",
        value: 2,
      },
      {
        section: "skills",
        value: 3,
      },
      {
        section: "education",
        value: 4,
      },
      {
        section: "proyects",
        value: 5,
      }
    ]

    //CAMBIAR EL INDEX ACTIVO SEGUN LA SECCION EN LA QUE ESTE EL USUARIO
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY < 651) {
            setIndexActive(1)
          } else if (window.scrollY > 651 && window.scrollY < 1822) {
            setIndexActive(2)
          } else if (window.scrollY > 1822 && window.scrollY < 2864) {
            setIndexActive(3)
          } else if (window.scrollY > 2864 && window.scrollY < 3515) {
            setIndexActive(4)
          } else{
            setIndexActive(5)
          }
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [])
      




    return (
      <div className="hidden index-navigate fixed lg:right-10 xl:right-28 lg:block">
        <div className="flex flex-col gap-5">
          {
            IndexValues.map((value, index) => (
                <a 
                key={index}
                className={`w-5 h-5  border-2 border-black dark:border-white rounded-full cursor-pointer ${indexActive === value.value ? "bg-secondary dark:bg-primary" : ""}`}
                href={`#${value.section}`}
                >
                </a>
            ))
          }
        </div>
      </div>
    );
};

export default IndexNavigate;