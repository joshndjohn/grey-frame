import { GalleryStyle, VideoBoxes, VideoBox, Videos } from "./Gallery.styles";
import { Wrap, Title } from "../../Wrapper.styles";
import Video from "../../components/video/Video";
import { controlValuesString, videoData } from "../../utils/constants";

const Gallery = () => {
  return (
    <GalleryStyle id="gallery">
        <Wrap>
            <Title>
                <h1>gallery</h1>
                <h3>our work</h3>
            </Title>

            {/* Videos */}
            <VideoBoxes>
                <VideoBox>
                    <p>highlight film</p>
                    <Videos>
                        {videoData.highlightFilms.map(highlight => (
                            <Video key={highlight.title} iframeBaseUrl={highlight.src + controlValuesString}/>
                        ))}
                    </Videos>
                </VideoBox>
                <VideoBox>
                    <p>feature film</p>
                    <Videos>
                        {videoData.featureFilms.map(feature => (
                            <Video key={feature.title} iframeBaseUrl={feature.src + controlValuesString}/>
                        ))}
                    </Videos>
                </VideoBox>
                <VideoBox>
                    <p>documentary film</p>
                    <Videos>
                        {videoData.documentaries.map(documentary => (
                            <Video key={documentary.title} iframeBaseUrl={documentary.src + controlValuesString}/>
                        ))}
                    </Videos>
                </VideoBox>
            </VideoBoxes>
        </Wrap>
    </GalleryStyle>
  )
}

export default Gallery