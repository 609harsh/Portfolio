
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <div className='h-full'>
      <div style={{ backgroundImage: "linear-gradient(180deg, #0c0c1d, #111132)"}} className="h-screen bg-center bg-no-repeat bg-cover relative">
        <NavBar />
        <Home />
      </div>
      <div className='mx-auto max-w-screen-lg flex flex-col items-center gap-4'>
        <AboutMe />
        <Projects />
        <Skills />
        <ContactMe />
      </div>
    </div>
  )
}

export default App
