import Navbar from "../src/components/Navbar"
import HeroSection from "../src/pages/HeroSection/HeroSection"
import AboutSection from "../src/pages/AboutSection/AboutSection"
import ProjectsSection from "../src/pages/ProjectsSection/ProjectsSection"
import Footer from "../src/components/Footer"
 

const App = () => {

  return (
    <>
      <Navbar/>
      <HeroSection />
      <AboutSection/>
      <ProjectsSection/>
      <Footer/>
      
    </>
  )
}

export default App

// faz o psuh, npm run deploy e pronto 