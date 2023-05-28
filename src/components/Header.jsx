import menuLogo from "../Assets/menu.png";
import closeLogo from "../Assets/close.png"
import { Icon } from '@iconify/react';

const Header = ({ onToggle, toggler }) => {
  return (
     <nav>  
        <div className="navbar">
            <a href="#home" className="logo">
            GREY FRAME STUDIOS
        </a>
        <div className="menuBtn">
            {/* <img src={`${toggler ? closeLogo : menuLogo}`} className={'menu'} alt="#" onClick={onToggle}/> */}
            <Icon icon={`${toggler ? "line-md:menu-to-close-alt-transition" : "jam:menu"}`} color="#fd005b" className={'menu icon'} alt="#" onClick={onToggle}/>
        </div>
         <ul className={`nav-links ${toggler && 'active-nav'}`}>
            <li><a href="#service">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </div>
    </nav>
  )
}

export default Header


//  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
//         <div class="container">
//             {/* <!-- Brand --> */}
//             <a href="#home" class="navbar-brand">Frontend Bootcamp</a>

//             {/* <!-- hamburger menu --> */}
//             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
//                 <span class="navbar-toggler-icon"></span>
//             </button>
//             {/* <!-- Menu --> */}
//             <div class="collapse navbar-collapse" id="navmenu">
//                 <ul class="navbar-nav ms-auto">
//                     <li class="nav-item">
//                         <a href="#learn" class="nav-link">What You'll Learn</a>
//                     </li>
//                     <li class="nav-item">
//                         <a href="#questions" class="nav-link">Questions</a>
//                     </li>
//                     <li class="nav-item">
//                         <a href="#instructors" class="nav-link">Instructors</a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>
