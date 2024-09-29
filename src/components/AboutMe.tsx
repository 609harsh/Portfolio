

const AboutMe = () => {
  return (
    <section id="aboutme">
      <h1 className="text-center font-bold text-3xl sticky top-0 bg-gray-50 z-10 p-4 font-prozo mt-6">About Me</h1>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-2/5 p-7">
          <img src="profile.jpg" className="rounded-[50%] "/>
        </div>
        <div className=" w-full md:w-3/5 text-center font-baloo text-xl mx-auto md:my-auto">
          <p className=" font-baloo text-lg md:text-xl  h-full md:leading-loose p-3 md:p-6">
            Hi👋, I am <a className="font-semibold inline" href="https://bento.me/hrh" target="_blank">Harsh Gupta</a>. I graduated from <span className="font-semibold">Indian Institute of Information Technology, Kottayam</span>.
            I'm a full-stack developer. I have passion for creating visually appealing, user-friendly,
            higly scalable web application. My focus is JavaScript, and core stack is <span className="font-semibold">React, Next.js, ExpressJS, Nestjs, Mongodb, Postgresql. </span>
            I am currently open for <span className="font-semibold">Full Time postiton</span> as a Software Developer.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe