import React, { useEffect, useState } from 'react';
import themeIcon from '../assets/svg/icon-bw.svg'

const NavBar = () => {

  const [togle, setTogle] = useState(false)
  const togleClass = togle ? 'rotate-180' : 'rotate-0'

  const changeTheme = () => {
    setTogle(!togle)
    document.documentElement.classList.toggle('dark')
  }



  console.log('hola')

    return (
        <nav className={`py-7 px-10 flex tracking-widest items-center justify-center sm:justify-center gap-10 lg:py-16 lg:justify-between relative`} id='home'>

          <span className='space hidden lg:block'></span>

          <div className='flex gap-4 sm:gap-7 sm:text-xl lg:hidden'>
          <a className='border-b-2 border-secondary dark:border-primary' href="#home">HOME</a>
          <a href="#about">ME</a>
          <a href="#skills">SK</a>
          <a href="#education">ED</a>
          <a href="#proyects">PR</a>
          </div>

          {/* NAV DESKTOP */}
          <div className='hidden lg:flex lg:gap-12 lg:text-xl lg:uppercase'>
          <a className='border-b-2 border-secondary dark:border-primary' href="#home">HOME</a>
          <a href="#about">Sobre mi</a>
          <a href="#skills">Habilidades</a>
          <a href="#education">EDUCACION</a>
          <a href="#proyects">Proyectos</a>
          </div>

          <div onClick={changeTheme} className='cursor-pointer lg:absolute lg:right-10 xl:right-28'>
            <img className={`${togleClass} bg-body w-7 lg:w-9 transition ease-in duration-200 border-2 border-black  dark:border-none rounded-full`} src={themeIcon} alt="" />
          </div>

          <span className='space hidden lg:block'></span>
          
        </nav>
    );
};

export default NavBar;