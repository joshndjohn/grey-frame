import { GlobalStyles } from "./GlobalStyles";
import NavBar from "./components/navbar/NavBar";
import Hero from "./containers/hero/Hero";
import Services from "./containers/services/Services";
import About from "./containers/about/About";
import Gallery from "./containers/gallery/Gallery";
import Contact from "./containers/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
 
  return (
   <>
     <GlobalStyles/>
     <NavBar/>
     <Hero/>
     <Services/>
     <About/>
     <Gallery/>
     <Contact/>
     <Footer/>
   </>
  )
}

export default App;
