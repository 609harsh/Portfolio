import { motion } from "framer-motion";
import { resumeLink } from "../data";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: -220,
    transition: {
      repeat: Infinity,
      duration: 20,
    },
  },
};
const Home = () => {
  return (
        // <div className="flex flex-col justify-center items-center self-center justify-self-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        //   <h1 className="self-start text-4xl">Hi👋 I'm</h1>
        //   <h1 className="text-6xl my-7">Harsh Gupta</h1>
        //   <p>A Full-Stack Developer</p>
        //   <div>
        //     <a href="#contact"><button>Contact</button></a>
        //     <a href="https://drive.google.com/file/d/1TjnabeqkeYaKmiZX0cDccMW96KA8EGbY/view" target="_blank"><button>Resume</button></a>
        //   </div>
    // </div>
    <div className="h-screen overflow-x-clip relative">
    <motion.article
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="container max-w-7xl mx-auto h-full xl:h-3/4 flex flex-col gap-4 md:gap-8 items-center justify-center text-center"
      >
        <motion.h2
          variants={textVariants}
          className="text-2xl md:text-4xl text-[#663399] spacing tracking-widest uppercase"
        >
          Harsh Gupta
        </motion.h2>
        <motion.h1
          variants={textVariants}
          className="text-4xl md:text-6xl 2xl:text-8xl capitalize text-gray-200 font-RobotoMono"
        >
          Full Stack Developer
        </motion.h1>
        <motion.div
          variants={textVariants}
          className="flex flex-col md:flex-row gap-4 z-10"
        >
          <a href={"#contact"}>
            <motion.button
              variants={textVariants}
              className="p-2 md:p-4 border border-white rounded-lg bg-white text-black font-medium text-base"
            >
              Contact Me
            </motion.button>
          </a>
          <a href={resumeLink} target="_blank">
            <motion.button
              type="button"
              variants={textVariants}
              className="p-2 md:p-4 border border-white rounded-lg bg-transparent text-white text-base cursor-pointer inline-flex gap-1 font-medium"
            >
              Resume
              <span className="inline-block align-text-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg>
              </span>
            </motion.button>
          </a>
          
        </motion.div>
        
        <motion.img
          src="scroll.png"
          alt="scroll"
          variants={textVariants}
          animate="scrollButton"
          width={48}
          height={48}
          className="w-12 h-12"
          />
        
      </motion.article>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="absolute text-[50vh] -bottom-28 whitespace-nowrap text-[#ffffff09] w-1/2 font-bold"
      >
        Programmer, Developer, Problem Solver
      </motion.div>
      {/* <figure className="h-1/2 md:h-full w-full md:w-auto absolute top-auto md:top-0 bottom-0 md:bottom-auto right-0">
        <img
          src="html-5.png"
          alt="ikramdeveloper"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </figure> */}
    </div>
      
  )
}

export default Home