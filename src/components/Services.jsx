import React from 'react'
import { Icon } from '@iconify/react';


const Services = () => {
  return (
    <section className="service" id="service">
    <div className="service-text">
        <h2>Services</h2>
        <h5>What we offer</h5>
        <p>Weddings video production that’s creative and affordable.</p>
    </div>
    <div className="service-container">
        <div className="service-box">
            <div className="box">
                <Icon icon="fluent:movies-and-tv-20-regular" className='icon'/>
                <h4>Instant Teaser</h4>
                <p>1 minute sneak peak <br/>Featuring the most important and interesting moments of your <br/>wedding.</p>
            </div>
            <div className="box">
               <Icon icon="ant-design:video-camera-outlined" className='icon'/>
                <h4>Highlight Film</h4>
                <p>3-7mins <br/>Featuring memorable moments <br/>from prep, vow, kiss the bride and reception, laced with important speech from the officiant and other notable people from your event.</p>
            </div>
            <div className="box">
                <Icon icon="clarity:film-strip-line" className='icon'/>
                <h4>Feature Film</h4>
                <p>10-15mins <br/>A longer version of the Highlight.</p>
            </div>
            <div className="box">
                <Icon icon="ph:film-reel" className='icon'/>
                <h4>Documentary Film</h4>
                <p>45-90mins <br/>Everything that happened on your special day. </p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Services