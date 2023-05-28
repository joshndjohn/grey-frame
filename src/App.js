import './App.css'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState } from 'react'

//Videos
import video1 from './Assets/videos/video1.mp4';
import video2 from './Assets/videos/video 2.mp4';
import video3 from './Assets/videos/video 3.mp4';
import video4 from './Assets/videos/video4.mp4';
import video5 from './Assets/videos/video 5.mp4';
import video6 from './Assets/videos/video 6.mp4';



const App = () => {
const [toggler, setToggler] = useState(false);
    
    const onToggle = () => {
        return setToggler(!toggler);
    }

    const [videos, setVideos] = useState([
        {
            id: 1,
            video: video1,
        },
        {
            id: 2,
            video: video2,
        },
        {
            id: 3,
            video: video3,
        },
        {
            id: 4,
            video: video4,
        },
        {
            id: 5,
            video: video5,
        },
        {
            id: 6,
            video: video6,
        },
])

  return (
      <>
         <Header onToggle={onToggle} toggler={toggler}/>
         <Showcase />
         <Services />
         <About /> 
         <Gallery videos={videos}/>
         <Contact />
         <Footer />     
      </> 
  )
}

export default App


