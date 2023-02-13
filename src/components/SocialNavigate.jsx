import React from "react";
import iconGithub from "../assets/svg/icon-github.svg";
import iconLinkedin from "../assets/svg/icon-Linkedin.svg";
import iconTwitter from "../assets/svg/icon-twitter.svg";
import Iconmail from "../assets/svg/icon-mail.svg";

const SocialNavigate = () => {
  return (
    <div className="social-nav fixed lg:left-10 xl:left-28 hidden lg:block">
      <div className="flex flex-col gap-6">
        <a href="https://www.linkedin.com/in/noe-hdz-dev/" target="_blank">
        <i className='bx bxl-linkedin bx-md text-white dark:text-black bg-black dark:bg-white hover:bg-secondary dark:hover:bg-primary rounded-lg p-1'></i>
        </a>
        
        <a href="https://github.com/Noehernandez24" target="_blank">
        <i className='bx bxl-github bx-md text-white dark:text-black bg-black dark:bg-white hover:bg-secondary dark:hover:bg-primary rounded-lg p-1' ></i>
        </a>

        <a href="https://twitter.com/NoeHernandev" target="_blank">
        <i className='bx bxl-twitter bx-md text-white dark:text-black bg-black dark:bg-white hover:bg-secondary dark:hover:bg-primary rounded-lg p-1' ></i>
        </a>

        <a href="mailto:noe.hernandez.dev@gmail.com" target="_blank">
        <i className='bx bxs-envelope bx-md text-white dark:text-black bg-black dark:bg-white hover:bg-secondary dark:hover:bg-primary rounded-lg p-1' ></i>
        </a>
      </div>
    </div>
  );
};

export default SocialNavigate;
