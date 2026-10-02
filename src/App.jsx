import Navigation from './components/Navigation'
import Header from './components/Header/Header'
import About from './components/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import CareerPath from './components/Career/CareerPath'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <CareerPath />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
