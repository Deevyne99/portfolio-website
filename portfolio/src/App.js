import About from './components/about/About'
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
    </div>
  )
}

export default App
