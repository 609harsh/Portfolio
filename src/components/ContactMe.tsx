import Input from "./input"

const ContactMe = () => {
  return (
    <section id="contact" className="w-full rounded-md shadow-md mb-32">
      <h1 className="text-center font-bold text-3xl sticky top-0 bg-gray-50 z-20 p-4 mb-3 font-prozo">Contact Me</h1>
      <div className=" w-full mx-auto py-4 px-2">
        <div className="flex flex-col md:flex-row gap-4 ">
          <div className="flex flex-col gap-3 md:w-1/2 items-center justify-center"> 
            <Input labelName="Full Name" />
            <Input labelName="Email" />
            <Input labelName="Message" />
            <a href="#_" className="relative px-5 py-2 font-medium text-white group w-1/2">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
              <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
              <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
              <span className="relative">Contact Me</span>
            </a>
          </div>
          <div className="flex flex-col gap-6 justify-around m-auto md:w-1/2 ">
            <p>
              <h1 className="font-semibold text-xl">Contact</h1>
              <h4>harshgupta609@gmail.com</h4>
            </p>
            <p>
              <h1 className="font-semibold text-xl">Based in</h1>
              <h4>Lucknow, Uttar Pradesh, India</h4>
            </p>
            <ul className="flex gap-4">
              <li><a href="https://www.linkedin.com/in/harsh-gupta-a72902244/" target="_blank"><img src="image.png" className="h-10 w-10" /></a></li>
              <li><a href="mailto:harshgupta609@gmail.com" target="_blank"><img src="gmail.png" className="h-10 w-10" /></a></li>
              <li><a href="https://www.github.com/609harsh" target="_blank"><img src="github.png" className="h-10 w-10" /></a></li>
              <li><a href="https://x.com/609hgharsh" target="_blank"><img src="twitter.png" className="h-10 w-10" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default ContactMe
