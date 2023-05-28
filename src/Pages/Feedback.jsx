import React from 'react'
import { Link } from 'react-router-dom'

const Feedback = () => {
  return (
   <div class="likkle">
        <header>
            <Link to="./." class="logo">
                GREY FRAME STUDIO
            </Link>
        </header>

        <p className="feedback">Thanks for contacting us!<br /> We will get back to you Shortly.</p>
        <footer>
            <div className="footer-copyright">
                <p>Copyright © 2022 Grey Frame Studio, All rights reserved. Powered by <span className="designed">Narrows
                        IT.</span></p>
            </div>
        </footer>
    </div>
  )
}

export default Feedback