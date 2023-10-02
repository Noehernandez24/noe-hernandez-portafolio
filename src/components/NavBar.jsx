import React, { useEffect, useState } from 'react';
import themeIcon from '../assets/svg/icon-bw.svg'

const sections = [
  {
    id: 1,
    title: 'Home',
    href: 'home'
  },
  {
    id: 2, 
    title: 'Sobre mi',
    href: 'about'
  },
  {
    id: 3, 
    title: 'Habilidades',
    href: 'skills'
  },
  {
    id: 4, 
    title: 'Educación',
    href: 'education'
  },
  {
    id: 5, 
    title: 'Proyectos',
    href: 'proyects'
  }
]

const NavBar = ({setCurrentSection, currentSection}) => {
  const [togle, setTogle] = useState(false)
  const togleClass = togle ? 'rotate-180' : 'rotate-0'
  

  const changeTheme = () => {
    setTogle(!togle)
    document.documentElement.classList.toggle('dark')
  }



    return (
        <nav className={`  top-0 py-7 px-10 flex tracking-widest items-center justify-center sm:justify-center gap-10 lg:py-16 lg:justify-between`} id='home'>

          <span className='space hidden lg:block'></span>

          <div className='flex gap-4 sm:gap-7 sm:text-xl lg:hidden'>
          <a className='underline underline-offset-8 decoration-secondary dark:decoration-primary' href="#home">HOME</a>
          <a href="#about">ME</a>
          <a href="#skills">SK</a>
          <a href="#education">ED</a>
          <a href="#proyects">PR</a>
          </div>

          {/* NAV DESKTOP */}
          <div className='hidden lg:flex lg:gap-12 lg:text-xl lg:uppercase'>
            {sections.map(section => (
              <a
                className={`${currentSection === section.href &&  'underline decoration-secondary dark:decoration-primary'} hover:underline underline-offset-8 hover:decoration-secondary hover:dark:decoration-primary`}
                key={section.id} 
                href={`#${section.href}`}
                onClick={() => setCurrentSection(section.href)}
              >
                {section.title}
              </a>
            ))}
          </div>

          <div onClick={changeTheme} className='cursor-pointer lg:absolute lg:right-10 xl:right-28'>
            <img className={`${togleClass} bg-body w-7 lg:w-9 transition ease-in duration-200 border-2 border-black  dark:border-none rounded-full`} src={themeIcon} alt="" />
          </div>

          <span className='space hidden lg:block'></span>
          
        </nav>
    );
};

export default NavBar;