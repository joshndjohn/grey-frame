import React from 'react'

const About = () => {
  return (
<section className={"about"} id="about">
    <div className="about-text">
        <h2>About</h2>
        <h5>Who we are</h5>
    </div>

    <div className="text">
        <p>We are a team of professional editors with over 10 years experience in editing cinematic elopement, destination, catholic weddings etc. We
        just don’t cut and join, we tell stories using detailed editing to capture every moments of your
        wedding.<br/> You are assured of memorable visuals and seamless sound design.
        </p>
        {/* We are a team of professional editors with over 10 years experience in editing elopement, destination, catholic weddings etc. We just don’t cut and join, we tell stories using detailed editing to capture every moment of your wedding. 
You are assured of memorable visuals and seamless sound design. */}
    </div>
        <div className="column-container">
            <div className="columns">
                <div className="column"><span></span>
                    <p>6-12 days for delivery</p>
                </div>
                <div className="column"><span></span>
                    <p>Discount on multiple project at once</p>
                </div>
                <div className="column"><span></span>
                    <p>24/7 Support</p>
                </div>
            </div>
            <div className="columns">
                <div className="column"><span></span>
                    <p>Two drafts of project review</p>
                </div>
                <div className="column"><span></span>
                    <p>Clean Editing</p>
                </div>
            </div>
            <div className="columns">
                <div className="column"><span></span>
                    <p>Certified Experts</p>
                </div>
                <div className="column"><span></span>
                    <p>Affordable Prices</p>
                </div>
            </div>
        </div>
</section>
  )
}

export default About