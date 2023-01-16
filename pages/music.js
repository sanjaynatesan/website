import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import sanjay from "../public/sanjay.jpg";
import design from "../public/design.png";
import { useState } from "react";
import Typed from "react-typed";
import Link from "next/link";
import {
  SiPython,
  SiJava,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiRstudio,
  SiReact,
  SiNextdotjs,
  SiChakraui,
  SiC,
  SiFlask,
  SiDjango,
  SiSwift,
  SiTailwindcss,
  SiFirebase,
  SiHeroku,
  SiGit,
  SiPostman,
} from "react-icons/si";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white text-black px-10 md:px-20 lg:px-40 dark:bg-gray-800 dark:text-white ">
        <section className="min-h-screen pb-10">
          <nav className="py-10 mb-12 flex justify-between">
            <a href="localhost:3000">
              <h1 className="text-xl font-burtons">sanjaynatesan</h1>
            </a>
            <ul className="flex items-center gap-4">
              <li>
                <Link
                  className="bg-gradient-to-r to-cyan-500 from-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="/"
                >
                  CS Page
                </Link>
              </li>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Sanjay Natesan
            </h2>
            <p className="text-2xl py-2 md:text-3xl font-light">
              <span className="text-slider-items"></span>
              <strong className="text-slider">
                <Typed
                  strings={["Mridangam", "Venu Flute", "Tabla", "Kanjira", "Carantic Vocal"]}
                  typeSpeed={100}
                  backDelay={1100}
                  backSpeed={50}
                  loop
                />
              </strong>
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              Hey! I'm Sanjay, a student at Columbia University studying
              Computer Science and Economics. Welcome to my website, where you
              can get a glimpse into my work in CS and Music (and sometimes,
              their intersection!) Feel free to explore, and don't hesitate to
              reach out to me at my email, found below! Happy travels :)
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <a href="https://www.linkedin.com/in/sanjaynatesan" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/sanjaynatesan" target="_blank">
              <AiFillGithub />
            </a>
            <a href="mailto:sanjay.natesan@columbia.edu">
              <AiOutlineMail />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={sanjay} fill />
          </div>
        </section>

        <section className="pb-10">
          <div>
            <h3 className="text-3xl py-1">Select Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Some projects I have recently completed...
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <div className="relative text-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300">
              <Image
                src={design}
                width={100}
                height={100}
                className=" mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Backend Programming and Frameworks
              </h3>
              <h4 className="py-4 text-teal-600">
                Some backend programming languages and frameworks I have used
              </h4>
              <p className="text-gray-800 dark:text-white py-1">Python</p>
              <p className="text-gray-800 dark:text-white py-1">Java</p>
              <p className="text-gray-800 dark:text-white py-1">C/C#</p>
              <p className="text-gray-800 dark:text-white py-1">Flask</p>
              <p className="text-gray-800 dark:text-white py-1">Django</p>
            </div>
            <div className="relative text-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300">
              <Image
                src={design}
                width={100}
                height={100}
                className=" mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Frontend Programming
              </h3>
              <h4 className="py-4 text-teal-600">
                Some frontend programming languages I have used
              </h4>
              <p className="text-gray-800 dark:text-white py-1">HTML/CSS</p>
              <p className="text-gray-800 dark:text-white py-1">JavaScript</p>
              <p className="text-gray-800 dark:text-white py-1">React</p>
              <p className="text-gray-800 dark:text-white py-1">Node.js</p>
              <p className="text-gray-800 dark:text-white py-1">Swift/XCode</p>
            </div>
            <div className="relative text-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300">
              <Image
                src={design}
                width={100}
                height={100}
                className=" mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Statistical Computing
              </h3>
              <h4 className="py-4 text-teal-600">
                Some staticial computing languages and packages I have used
              </h4>
              <p className="text-gray-800 dark:text-white py-1">Python</p>
              <p className="text-gray-800 dark:text-white py-1">R</p>
              <p className="text-gray-800 dark:text-white py-1">
                scikit learn / sciPy
              </p>
              <p className="text-gray-800 dark:text-white py-1">ggplot2</p>
              <p className="text-gray-800 dark:text-white py-1">
                dplyr/tidyr/shiny
              </p>
              <p className="text-gray-800 dark:text-white py-1">
                pandas/matplotlib
              </p>
            </div>
          </div>
        </section>
        <section className="text-center pb-10">
          <div>
            <h3 className="text-3xl py-1 text-teal-600">Skills</h3>
          </div>
          <div className="text-md md:text-xl py-2 leading-8 text-gray-600 dark:text-white pb-5">
            Languages
          </div>
          <div className="text-5xl flex justify-center gap-10 py-3 max-w-4xl mx-auto text-gray-600 dark:text-white">
            <SiPython />
            <SiJava />
            <SiRstudio />
            <SiC />
            <SiJavascript />
            <SiHtml5 />
            <SiCss3 />
            <SiSwift />
          </div>
          <div className="text-md md:text-xl py-2 leading-8 text-gray-600 dark:text-white pb-5">
            Frontend, UI Libraries, and Frameworks
          </div>
          <div className="text-5xl flex justify-center gap-10 py-3 max-w-4xl mx-auto text-gray-600 dark:text-white">
            <SiReact />
            <SiNextdotjs />
            <SiChakraui />
            <SiTailwindcss />
            <SiFlask />
            <SiDjango />
          </div>
          <div className="text-md md:text-xl py-2 leading-8 text-gray-600 dark:text-white pb-5">
            Production Testing and Tools
          </div>
          <div className="text-5xl flex justify-center gap-10 py-3 max-w-4xl mx-auto text-gray-600 dark:text-white">
            <SiFirebase />
            <SiHeroku />
            <SiGit />
            <SiPostman />
          </div>
        </section>
      </main>
    </div>
  );
}

{
  /* <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              In Computer Science, I have experience from several various
              ventures in prominent research institutions such as{" "}
              <span className="text-teal-600 dark:text-teal-500">
                The Rockefeller University, Columbia University Irving Medical
                Center, and the Cary Institute of Ecosystem Studies
              </span>
              , where I have worked in computational biology and AI/ML
              supervised learning devlopment. I also have been working as a
              freelance developer.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Some relevant coursework I have completed include{" "}
              <span className="text-teal-600 dark:text-teal-500">
                Computation Linear Algebra, Artificial Intelligence,
                Multivariable Calculus, Statistics, Data Structures and
                Algorithms in Java, Advanced Programming in C, and Fundamentals
                of Computer Systems
              </span>
              .
            </p> */
}
