import { useState, useEffect, useRef } from "react";
import {
  VideoContainer,
  PosterWrapper,
  IframeWrapper,
  VideoIframe,
} from "./Video.styles";
import { Icon } from "@iconify/react";


function getYouTubeID(url) {
  const m = url.match(/(?:embed\/|v=)([^&?]+)/);
  return m ? m[1] : "";
}

const Video = ({ iframeBaseUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [posterSrc, setPosterSrc] = useState(null);
  const iframeRef = useRef(null);


  const blockContext = (e) => e.preventDefault();

  const videoId = getYouTubeID(iframeBaseUrl);
  const maxresUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const hqUrl     = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

 
  useEffect(() => {
    let cancelled = false;
    fetch(maxresUrl, { method: "HEAD" })
      .then(res => {
        if (!cancelled) {
          setPosterSrc(res.ok ? maxresUrl : hqUrl);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setPosterSrc(hqUrl);
        }
      });
    return () => { cancelled = true };
  }, [maxresUrl, hqUrl]);

  if (!posterSrc) {
    return null;
  }

  return (
    <VideoContainer onContextMenu={blockContext}>
      {!isPlaying ? (
        <PosterWrapper
          onClick={() => setIsPlaying(true)}
          onContextMenu={blockContext}
        >
          <img src={posterSrc} alt="Video poster" />
          <span>
            <Icon icon="bi:play-circle" />
            <p>play video</p>
          </span>
        </PosterWrapper>
      ) : (
        <IframeWrapper>
          <VideoIframe
            ref={iframeRef}
            src={iframeBaseUrl}
            title="Embedded Video"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          />
        </IframeWrapper>
      )}
    </VideoContainer>
  );
};

export default Video;
