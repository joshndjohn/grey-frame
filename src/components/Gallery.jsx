

const Gallery = ({ videos, control, onMouseOut, onMouseOver }) => {
  return (
    <section className="gallery" id="gallery">
        <div className="gallery-text">
            <h2>Gallery</h2>
            <h5>Our Work</h5>
        </div>
        <div className="gallery-container">
            <div className="video-column">
                {videos.map(({ id, video, poster }) => {
                    return(
                     <video
                        key={id}
                        className="video"
                        preload="none" 
                        controlsList="nodownload"
                        poster={poster}
                        loop muted playsInline 
                        controls={control && true}
                        src={`${video}`}
                        typeof={'video/mp4'}
                        onMouseEnter={onMouseOver}
                        onMouseLeave={onMouseOut}
                    />
                    )
                })}
            </div>      
        </div>
    </section>
  )
}

export default Gallery

    // <Video
    //                     key={id}
    //                     className="video"
    //                     preload="metadata" 
    //                     controlsList="nodownload"
    //                     config={config}
    //                      controls loop muted playsInline 
    //                     src={`${video}#t=3.0`}
    //                     typeof={'video/mp4'}
    //                     onMouseOver={e => e.target.play()}
    //                     onMouseOut={e => e.target.pause()}
    //                 />