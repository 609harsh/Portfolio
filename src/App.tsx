
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'

function App() {

  return (
    <div className='h-full bg-gray-50'>
      <div style={{ backgroundImage: "linear-gradient(180deg, #0c0c1d, #111132)"}} className="h-screen bg-center bg-no-repeat bg-cover relative">
        <NavBar />
        <Home />
      </div>
      <div className='mx-2 md:mx-auto max-w-screen-lg flex flex-col items-center gap-8'>
        <AboutMe />
        <Timeline/>
        <Projects />
        <Skills />
        <ContactMe />
      </div>
    </div>
  )
}

export default App
