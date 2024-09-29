import { project } from "../data"

const Projects = () => {
  return (
    <section id="projects" className="w-full relative ">
      <h1 className="text-center font-bold text-3xl sticky top-0 bg-gray-50 z-10 p-4 font-prozo">Projects</h1>
      <div className="flex flex-col gap-2 mx-1">
        {
          project.map(p => (
            <div key={p.id } className="w-full rounded-md shadow-md h-full flex flex-col md:flex-row gap-2 md:gap-4 p-4 md:p-8">
                <div className="w-full md:w-3/5 rounded-md shadow-lg group overflow-hidden ">
                  <img src={p.img} className="group-hover:scale-110 h-full max-w-full transform  w-full transition-all duration-300 block object-fit outline-none rounded-md shadow-lg aspect-video "/>
                </div>
                <div className="md:w-2/5 flex flex-col gap-1 md:gap-4 md:mt-8">
                  <h1 className="font-bold text-2xl text-center font-poppins">
                    {p.name}
                  </h1>
                <p className="text-center mt-2 font-baloo">{p.description}</p>
                <p className="inline-flex flex-wrap gap-2 mt-4 justify-center">
                  {
                    p.tech.map((val, idx) => (
                      <span key={idx} className="font-poppins bg-blue-100 rounded-3xl px-2 py-2 text-sm font-semibold font-Baloo text-blue-900 cursor-pointer hover:bg-blue-200 transition-colors duration-200 ease-in">{val}</span>
                    ))
                  }                  
                </p>
                <p className="w-full flex flex-row justify-center gap-3 mt-4">
                  <a href={p.github} target="_blank" className="rounded-full border-2 border-solid p-2 border-blue-900 hover:bg-blue-900 text-blue-900 hover:text-white transition-colors duration-200 ease-in">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                      </svg>
                  </a>
                  <a href={p.link} target="_blank" className="rounded-full border-2 border-solid p-2 border-blue-900 hover:bg-blue-900 text-blue-900 hover:text-white transition-colors duration-200 ease-in">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                  </a>
                </p>
                </div>
              </div>
          ))
        }
      </div>

    </section>
  )
}

export default Projects