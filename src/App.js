import { useState } from 'react'
import './App.css'
import { Header, Showcase, About, Services, Gallery, Contact, Footer } from './components/index'
import { video1, video2, video3, video4, video5, video6 } from './Assets/index'
import { poster1, poster2, poster3, poster4, poster5, poster6 } from './Assets/index'


const App = () => {
const [toggler, setToggler] = useState(false);
    
    const onToggle = () => {
        return setToggler(!toggler);
    }

    const [videos, setVideos] = useState([
        {
            id: 1,
            video: video1,
            poster: poster1
        },
        {
            id: 2,
            video: video2,
            poster: poster2
        },
        {
            id: 3,
            video: video3,
            poster: poster3
        },
        {
            id: 4,
            video: video4,
            poster: poster4
        },
        {
            id: 5,
            video: video5,
            poster: poster5
        },
        {
            id: 6,
            video: video6,
            poster: poster6
        },
])

const [control, setControl] = useState(false);
const mouseOver = (e) => {
    e.target.play()
    setControl(true);
};
const mouseOut = (e) => {
    e.target.pause()
    setControl(false);
};

  return (
      <>
         <Header onToggle={onToggle} toggler={toggler}/>
         <Showcase />
         <Services />
         <About /> 
         <Gallery videos={videos} control={control} onMouseOut={mouseOut} onMouseOver={mouseOver}/>
         <Contact />
         <Footer />     
      </> 
  )
}

export default App


