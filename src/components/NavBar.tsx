
import { useRef,useEffect } from "react";
import { motion, useCycle } from "framer-motion";

  

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const variantsItem = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

const itemIds = [
  {id:0,name:"HOME",link:"#home"},
  { id: 1, name: "ABOUT ME", link: "#aboutme" },
  {id:2, name:"WORK", link:"#work"},
  {id:3,name:"PROJECTS",link:"#projects"},
  {id:4,name:"SKILLS",link:"#skills"},
  {id:5,name:"CONTACT",link:"#contact"},
];
  
  const Path = (props:any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);
const MenuToggle = ({ toggle }:{toggle:any}) => (
    <button onClick={toggle} className="outline-none border-none cursor-pointer absolute top-5 left-7 w-12 h-12 rounded-full bg-transparent">
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
      </button>
  );


const MenuItem = ({ i }:{i:any}) => {
  const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF","#1100ff"];
  return (
    <motion.li
      variants={variantsItem}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="m-0 p-0 list-none mb-5 flex items-center cursor-pointer"
    >
        <a href={i.link} className="font-semibold text-3xl" style={{ color: colors[i.id] }}>
          {i.name}
        </a>
      
    </motion.li>
  );
};

const Navigation = ({isOpen}:{isOpen:boolean}) => {
  return (
    <motion.ul
      variants={variants}
      initial={{ opacity: 0 }}
      animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="m-0 p-6 absolute w-full h-full flex items-center justify-center flex-col gap-3 ">
    {itemIds.map(i => (
      <MenuItem i={i} key={i.id} />
    ))}
  </motion.ul >
  )
}

const useDimensions = (ref:any) => {
  const dimensions = useRef({ width: 0, height: 0 });
  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);
  return dimensions.current;
};

const NavBar = () => {  
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="absolute top-0 left-0 bottom-0 w-[300px] z-20 "
    >
      <motion.div className="absolute top-0 left-0 bottom-0 w-[300px] bg-white" variants={sidebar}>
        <Navigation isOpen={isOpen} />
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}



export default NavBar