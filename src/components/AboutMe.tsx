

const AboutMe = () => {
  return (
    <section id="aboutme">
      <h1 className="text-center font-bold text-3xl sticky top-0 bg-gray-50 z-10 p-4 font-prozo">About Me</h1>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-2/5">
          <img src="profile.png" className="rounded-[50%]"/>
        </div>
        <div className="w-3/5">
          <p></p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe