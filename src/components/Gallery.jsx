import React from 'react'




const Gallery = ({ videos }) => {
  return (
    <section className="gallery" id="gallery">
        <div className="gallery-text">
            <h2>Gallery</h2>
            <h5>Our Work</h5>
        </div>
        <div className="gallery-container">
            <div className="video-column">
                {videos.map((video) => {
                    return(
                     <video
                        key={video.id}
                        className="video"
                        preload="none" 
                        autoPlay loop muted playsInline
                        src={video.video}
                        typeof={'video/mp4'} 
                    />
                    )
                })}
            </div>      
        </div>
    </section>
  )
}

export default Gallery

    