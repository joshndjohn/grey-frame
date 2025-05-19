import styled from "styled-components";
import { Icon } from "@iconify/react";

export const MenuBar = styled(Icon)`
    height: 3rem;
    width: 3rem;
    cursor: pointer;
    display: none;
    background: var(--primaryColor);
    border-radius: 2rem;
    font-size: 40px;
    padding: 7px;
    color: var(--secondaryColor);

    @media (max-width: 475px) {
            display: inline-block;
        }

    @media (max-width: 640px) {
    display: inline-block;
    }

    @media (max-width: 768px) {
    display: inline-block;
    }



`;

export const Nav = styled.nav`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    /* contain: layout paint; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 5%;
    height: 13vh;
    background-color: var(--myBlack);

     ul {
        display: flex;
        gap: 40px;

        @media (max-width: 475px) {
            display: none;
        }

        @media (max-width: 640px) {
            display: none;
        }

        @media (max-width: 768px) {
            display: none;
        }

        @media (max-width: 1024px) {
        gap: 15px;
        font-size: .8rem;
    }
    }

    ul li a {
        position: relative;
    }

    ul li a:hover {
        color: var(--secondaryColor);
    }

    ul li a:after {
    content: "";
    left: 0;
    bottom: 0;
    position: absolute;
    height: 1px;
    width: 0;
    background: var(--secondaryColor);
    transition: .3s;
}

 ul li a:hover::after {
    width: 100%;
}
`;

// ——— Side-slider container ———
export const SideNav = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 75%;
  max-width: 250px;
  height: 100vh;
  background-color: var(--secondaryColor);
  padding: 2rem;
  z-index: 1500;
  transition: left 0.5s ease-in-out; 
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 769px) {
    display: none;
  }

  a {
    color: var(--primaryColor);
    font-size: 1.1rem;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase
  }
`;

// ——— Full-screen overlay behind sidebar ———
export const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  inset: 0; /* top/right/bottom/left = 0 */
  background: rgba(0, 0, 0, 0.5); 
  z-index: 1400;

  @media (min-width: 769px) {
    display: none; 
  }
`;
