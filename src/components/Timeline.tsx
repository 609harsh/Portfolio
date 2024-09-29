import React from "react";
import { experience } from "../data";


const imgType = {
  'work': 'work.svg',
  'edu':'hat.svg'
}

const Timeline: React.FC = () => {
  return (
    <section id="work" className="relative">
      <h1 className="text-center font-bold text-3xl sticky top-0 bg-gray-50 z-20 p-4 mb-3 font-prozo">Experience and Education</h1>
      <div className={`font-poppins relative w-full mx-auto my-0 after:content-[''] after:absolute after:w-2 after:bg-gradient-to-b after:from-zinc-100 after:to-zinc-400 after:via-gray-200 after:top-0 after:bottom-0 after:left-8 sm:after:left-1/2 after:-ml-1`}>
        {
          experience.map(i => {
            return (i.id % 2 == 1) ? (
              <div key={i.id} className={`pl-[70px] pr-6 sm:pl-10 sm:pr-10 py-3 relative bg-inherit sm:w-1/2 before:left-[62px] before:border-t-8 before:border-b-8 before:border-r-8 before:border-l-0 ${ i.type==='work'?"after:content-[url('work.svg')]":"after:content-[url('hat.svg')]"} after:absolute after:w-12 after:h-12 after:left-2 after:drop-shadow-lg  sm:after:-right-6  sm:after:left-auto after:p-2 after:bg-white after:border-white after:border-solid after:border-4 after:top-4 after:rounded-full after:z-10 left-0 before:content-[''] before:h-0 before:absolute before:top-6 before:w-0 before:z-10 sm:before:right-8 sm:before:left-auto before:border-solid sm:before:border-r-0 sm:before:border-l-8 before:border-t-transparent before:border-b-transparent before:border-r-slate-500 sm:before:border-r-transparent before:border-l-transparent sm:before:border-l-slate-500`}>
                <div className="px-5 py-5 sm:py-10 sm:px-10 bg-[#f3f4f6] border-2 border-solid border-[rgba(0, 0, 0, 0.05)]  outline-none shadow-lg relative rounded-md">
                  <h2 className="font-bold text-xl ">{i.name+"  "} 
                    {
                      i.link !== "" && 
                      <a className="inline-block align-text-bottom" href={i.link}  target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg>
                      </a>
                    }
                  </h2>
                  <p className="font-semibold text-lg">{i.postion}</p>
                  <p className="italic mb-1 text-sm">{i.location} | {i.time}</p>
                  <ul className="font-baloo">
                    {
                      i.description.map(item => (
                        <li>{item}</li>
                      ))
                    }
                    
                    { i.tech.length>0 && (<li><span className="font-bold">Tech Stack</span> - {i.tech.join(" ")}</li>)}
                  </ul>
                </div>
                {/* <span>Timeline </span> */}
              </div>
            ) : (
                <div key={i.id} style={{ } } className={`pl-[70px] pr-6 sm:pl-10 sm:pr-10 py-3 relative bg-inherit sm:w-1/2  ${ i.type==='work'?"after:content-[url('work.svg')]":"after:content-[url('hat.svg')]"} after:absolute after:w-12 after:h-12 after:p-2 after:-right-3 after:bg-white after:border-white after:border-solid after:border-4 after:drop-shadow-lg after:top-4 after:rounded-full after:z-10 left-0 sm:left-1/2 before:content-[''] before:h-0 before:absolute before:top-6 before:w-0 before:z-10 before:left-[62px] sm:before:left-8 before:border-solid before:border-t-8 before:border-b-8 before:border-r-8 before:border-l-0 before:border-t-transparent before:border-b-transparent before:border-r-slate-500 before:border-l-slate-500 after:left-2 sm:after:-left-6 `}>
                  <div className="px-5 py-5 sm:py-10 sm:px-10 bg-[#f3f4f6] border-2 border-solid border-[rgba(0, 0, 0, 0.05)]  outline-none shadow-lg relative rounded-md">
                    <h2 className="font-bold text-xl">{i.name+"  "}
                      {
                      i.link !== "" && 
                      <a className="inline-block align-text-bottom" href={i.link}  target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg>
                      </a>
                      }
                    </h2>
                    <p className="font-semibold text-lg">{i.postion}</p>
                    <p className="italic mb-1 text-sm">{i.location} | {i.time}</p>
                    <ul className="font-baloo">
                      {
                        i.description.map(item => (
                          <li>{item}</li>
                        ))
                      }
                      { i.tech.length>0 && (<li><span className="font-bold">Tech Stack</span> - {i.tech.join(" ")}</li>)}
                    </ul>
                  </div>
                </div>
            )
          })
        }
        
    
      </div>
    </section>
  );
};

export default Timeline;
