import About from './components/about/About'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Skills from './components/skills/Skills'
import Work from './components/work/Work'

function App() {
  return (
    <div className=''>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App
