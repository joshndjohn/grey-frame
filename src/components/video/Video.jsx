import { useState, useEffect, useRef } from "react";
import {
  VideoContainer,
  PosterWrapper,
  IframeWrapper,
  VideoIframe,
} from "./Video.styles";
import { Icon } from "@iconify/react";

// Helper to extract video ID from any YouTube embed/watch URL
function getYouTubeID(url) {
  const m = url.match(/(?:embed\/|v=)([^&?]+)/);
  return m ? m[1] : "";
}

const Video = ({ iframeBaseUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [posterSrc, setPosterSrc] = useState(null);
  const iframeRef = useRef(null);

  // Block right-click
  const blockContext = (e) => e.preventDefault();

  // Derive video ID
  const videoId = getYouTubeID(iframeBaseUrl);
  const maxresUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const hqUrl     = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  // On mount, check which thumbnail exists
  useEffect(() => {
    let cancelled = false;
    // Try HEAD on maxres; if 200, use it; otherwise fallback to hq
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
    // still deciding which poster to use
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
