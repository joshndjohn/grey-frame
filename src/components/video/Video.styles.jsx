import styled from "styled-components";
// import { Icon } from "@iconify/react";

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;      
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;     
`;

export const PosterWrapper = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;     

  height: 230px;
  width: 408px;
  object-fit: cover;
  opacity: 0.8;

  @media (max-width: 1280px) {
    height: 140px;
    width: 255px;
  }
  @media (max-width: 1024px) {
    height: 130px;
    width: 235px;
  }
  @media (max-width: 768px) {
    height: 140px;
    width: 245px;
  }
  @media (max-width: 640px) {
    height: 190px;
    width: 350px;
  }
  @media (max-width: 475px) {
    height: 190px;
    width: 350px;
  }

  img {
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--primaryColor);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;

    svg {
      font-size: 40px;
    }
    p {
      margin-top: 0.5rem;
      font-size: 1.125rem;
      font-weight: 500;
      color: #fff;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
    }
  }
`;

export const IframeWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;

  height: 230px;
  width: 408px;

  @media (max-width: 1280px) {
    height: 140px;
    width: 255px;
  }
  @media (max-width: 1024px) {
    height: 130px;
    width: 235px;
  }
  @media (max-width: 768px) {
    height: 140px;
    width: 245px;
  }
  @media (max-width: 640px) {
    height: 190px;
    width: 350px;
  }
  @media (max-width: 475px) {
    height: 190px;
    width: 350px;
  }
`;

export const VideoIframe = styled.iframe.attrs({
  onContextMenu: e => e.preventDefault(),
})`
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;
