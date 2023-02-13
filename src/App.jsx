import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import profile from "./assets/images/profile-1.png";
import ItemSkill from "./components/ItemSkill";
import academloLogo from "./assets/svg/icon-academlo.svg";
import uesLogo from "./assets/svg/icon-ues.svg";
import Education from "./components/Education";
import Proyects from "./components/Proyects";
import proyecto1 from "./assets/images/proyecto-1.png";
import proyecto2 from "./assets/images/proyecto-2.png";
import proyecto3 from "./assets/images/proyecto-3.png";
import proyecto4 from "./assets/images/proyecto-4.png";
import proyecto5 from "./assets/images/proyecto-5.png";
import ButtonDowload from "./components/ButtonDowload";
import IndexNavigate from "./components/IndexNavigate";
import SocialNavigate from "./components/SocialNavigate";
import ButtonNextSection from "./components/ButtonNextSection";
import Loader from "./components/Loader";
import MoreBtn from "./components/MoreBtn";
import { useWindowSize } from "react-use";
import MoreProyects from "./components/MoreProyects";
import { quotesList } from "../quotes"


// No se hizo en un archivo aparte, porque habia problemas al colocar 
// los colores de tailwind y se bugeaba siempre al actualizar el archivo config
const skills = [
  {
    id: 1,
    name: "React JS",
    icon: "bx bxl-react",
    color: "bg-react",
  },
  {
    id: 2,
    name: "JavaScript",
    icon: "bx bxl-javascript",
    color: "bg-js",
  },
  {
    id: 3,
    name: "Redux",
    icon: "bx bxl-redux",
    color: "bg-redux",
  },
  {
    id: 4,
    name: "React Router Dom",
    icon: "bx bx-folder-open",
    color: "bg-react-router",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: "bx bxl-tailwind-css",
    color: "bg-tailwind",
  },
  {
    id: 6,
    name: "Bootstrap",
    icon: "bx bxl-bootstrap",
    color: "bg-bootstrap",
    isHiden: true
  },
  {
    id: 7,
    name: "HTML5",
    icon: "bx bxl-html5",
    color: "bg-html",
  },
  {
    id: 8,
    name: "CSS3",
    icon: "bx bxl-css3",
    color: "bg-css",
  },
  {
    id: 10,
    name: "Git",
    icon: "bx bxl-git",
    color: "bg-git",
  },
];

const proyectsList = [
  {
    id: 1,
    image: proyecto1,
    title: "Pokedex",
    description: 'Una aplicación hecha con React JS, en la que puedes consultar la información de tus pokemones favoritos!',
    url: 'https://pokedex-w-react.netlify.app/#/pokemons'
  },
  {
    id: 2,
    image: proyecto2,
    title: 'Rick & Morty',
    description: 'Una aplicación hecha con React JS que nos permite consultar acerca de los Universos de la serie Rick and Morty!',
    url: 'https://cool-salmiakki-ab62f9.netlify.app/'
  },
  {
    id: 3,
    image: proyecto3,
    title: 'E-COMMERCE',
    description: 'Una pagina web responsiva que simula la compra de productos de un eccomerce hecho 100% con vanilla JavasScript',
    url: 'https://sprightly-torte-b42305.netlify.app/'
  },
  {
    id: 4,
    image: proyecto4,
    title: 'DIGITAL STORE',
    description: 'Un eccomerce hecho con React JS, con login en la que puedes comprar multiples dispositivos tecnologicos',
    url: 'https://digital-store-react.netlify.app/'
  },
  {
    id: 5,
    image: proyecto5,
    title: 'Easy Clicker',
    description: 'Un juego sencillo de clicker hecho con React, en el puedes retarte a ti mismo a conseguir la mayor cantidad de clicks',
    url: 'https://easy-clicker.netlify.app/'

  }
];


function App() {
  const [loader, setLoader] = useState(true);
  // Pagination skills
  const [posPerPage, setPosPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * posPerPage;
  const firstIndex = lastIndex - posPerPage;
  const currentSkills = skills.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(skills.length / posPerPage);
  const { width } = useWindowSize();
  // Pagination proyects
  const [posPerPageProyects, setPosPerPageProyects] = useState(4);
  const [currentPageProyects, setCurrentPageProyects] = useState(1);
  const lastIndexProyects = currentPageProyects * posPerPageProyects;
  const firstIndexProyects = lastIndexProyects - posPerPageProyects;
  const currentProyects = proyectsList.slice(firstIndexProyects, lastIndexProyects)
  const totalPagesProyects = Math.ceil(proyectsList.length / posPerPageProyects)
  const randomQuote = quotesList[Math.floor(Math.random() * quotesList.length)]
  
  

  useEffect(() => {
    document.documentElement.classList.add("dark");
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (width < 1024) {
      setPosPerPage(4);
    } else {
      setPosPerPage(6);
    }
  }, [width]);

  const changeSkillPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1);
    }
  }

  const changeProyectPage = () => {
    if (currentPageProyects < totalPagesProyects) {
      setCurrentPageProyects(currentPageProyects + 1);
    } else {
      setCurrentPageProyects(1);
    }
  }

  return (
    <main>
      <SocialNavigate />
      <IndexNavigate />
      {loader && <Loader />}
      <NavBar />
      <header className="header container mx-auto">
        <section className="home flex flex-col gap-12  px-7 fade-in justify-center">
          <div className="logo flex justify-center items-center flex-col font-roboto font-bold ">
            <h1 className="pl-3.5 tracking-logo text-7xl sm:text-9xl text-secondary  dark:text-primary lg:tracking-logoLg focus-in-expand">
              [NOE]
            </h1>
            <h2 className="text-xl sm:text-3xl focus-in-expand text-ligth-title dark:text-white">
              H E R N A N D E Z
            </h2>
          </div>
          {/* HOME TEXTS */}
          <div>
            <h3 className=" text-center uppercase text-3xl lg:w-1/3 lg:mx-auto lg:leading-10">
              Desarrollador web frontend y futuro programador fullstack!
            </h3>
          </div>

          <span className="text-center sm:text-xl">
            {randomQuote.quote}
            <br />
            <span className="text-secondary  dark:text-primary text-center">
              - {randomQuote.author}
            </span>
          </span>

          <ButtonNextSection section="about" />
        </section>

        {/* ABOUT */}

        <section className="section" id="about">
          <h2 className="title">Acerca de mí</h2>

          <div className="sm:w-2/3 sm:mx-auto lg:flex lg:flex-row-reverse lg:items-center lg:gap-5">
            <img
              className="w-40 h-40 sm:w-48 sm:h-48 sm:mr-4 object-contain float-left border mr-2 rounded-xl lg:w-96 lg:h-96"
              src={profile}
              alt=""
            />
            <p className="text-lg sm:text-xl lg:leading-8">
              Soy Noé Hernández, tengo 20 años de edad, soy un{" "}
              <strong className="text-secondary  dark:text-primary">
                desarrollador Frontend
              </strong>{" "}
              y futuro programador Fullstack. Algunas tecnologías que manejo son
              Javascript, CSS, HTML y{" "}
              <strong className="text-secondary  dark:text-primary">
                React JS
              </strong>
              . Soy una persona responsable, con muchas metas y objetivos a
              alcanzar. Aprendo y creo todos los días, ¡creemos un proyecto
              juntos!{" "}
            </p>
          </div>

          <ButtonDowload />
          <ButtonNextSection section="skills" />
        </section>

        {/* SKILLS */}

        <section className="section " id="skills">
          <h2 className="title">Habilidades</h2>

          <div className="flex gap-7 justify-center items-center w-4/5 mx-auto sm:w-2/3 xl:w-2/4">
            <div className="grid grid-col-1 grid-rows-4 gap-7  lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-12 ">
              {currentSkills.map((skill, index) => (
                <ItemSkill
                  key={skill.id}
                  icon={skill.icon}
                  title={skill.name}
                  color={skill.color}
                />
              ))}
            </div>

            <MoreBtn
              changeSkillPage={changeSkillPage}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div>

          <ButtonNextSection section="education" />
        </section>

        {/* EDUCATION */}

        <section className="section" id="education">
          <h2 className="title">Educacion</h2>
          <div className="edu-main">
            <div className="education-container sm:w-2/3 sm:mx-auto lg:grid lg:grid-cols-2 lg:gap-6 xl:w-1/2">
              <Education
                logo={academloLogo}
                title="Desarrollo de aplicaciones web con React"
                date="2022 - 2023"
                animation={true}
                url="https://certificates.academlo.com/en/verify/83886552314801"
              />
              <Education
                logo={academloLogo}
                title="Fundamentos de desarrollo web"
                date="2022 - 2023"
                animation={true}
                url="https://certificates.academlo.com/en/verify/46652234618635"
              />
              <Education
                logo={uesLogo}
                title="Ingenieria en desarrollo de Software"
                date="En curso"
                uesColor="brightness-0 dark:brightness-100"
                url="https://www.ues.edu.sv/"
              />
              <Education
                logo={uesLogo}
                title="Ingenieria en sistemas"
                date="2020 - 2022"
                uesColor="brightness-0 dark:brightness-100"
                url="https://www.ues.edu.sv/"
              />
            </div>
            <ButtonNextSection section="proyects" />
          </div>
        </section>

        {/* PROYECTS */}

        <section className="section mb-14 sm:mb-16" id="proyects">
          <h2 className="title">Proyectos</h2>
          <div className="proyects-container sm:w-3/4 sm:mx-auto ">
            <div className="grid grid-cols-1 grid-rows-4 gap-6 sm:grid sm:grid-cols-2 sm:grid-rows-2 ">
              {currentProyects.map(proyect => (
                <Proyects
                  key={proyect.id}
                  image={proyect.image}
                  title={proyect.title}
                  description={proyect.description}
                  url={proyect.url}
                />
              ))}
            </div>
          </div>
          <MoreProyects
          changeProyectPage={changeProyectPage}
          currentPageProyects={currentPageProyects}
          totalPagesProyects={totalPagesProyects}         
          />
          <a
            href={`#home`}
            className="down hidden sm:block text-center hover:scale-110 transition-transform w-10 mx-auto duration-500"
          >
            <i className="bx bx-chevron-up bx-lg border rounded-full bg-black dark:bg-white text-white dark:text-black"></i>
          </a>
        </section>
      </header>

      <footer className="h-20 bg-footer flex justify-center items-center lg:hidden">
        <div className="footer-social flex gap-6">
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
      </footer>
    </main>
  );
}

export default App;
