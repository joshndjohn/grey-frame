import styled from "styled-components";
import { heroImage, btnBorder } from "../../utils/constants";


export const HeroStyle = styled.header`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 105vh;

    @media (max-width: 1024px) {
        height: 80vh;
        }

        @media (max-width: 768px) {
            height: 80vh;
        }

        @media (max-width: 640px) {
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1669789746310-700f9411fd71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJlYXV0aWZ1bCUyMHdlZGRpbmclMjBwaWN0dXJlfGVufDB8fDB8fHww');
            height: 100vh;
        }

    @media (max-width: 475px) {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1669789746310-700f9411fd71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJlYXV0aWZ1bCUyMHdlZGRpbmclMjBwaWN0dXJlfGVufDB8fDB8fHww');
        height: 100vh;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 40px;
        justify-content: center;
        align-items: center;
    }

    div span {
        display: flex;
        flex-direction: column;
        gap:20px;
        justify-content: center;
        align-items: center;
    }

    div span h1 {

        font-size: clamp(40px, 8vw, 65px);

        
        @media (max-width: 1024px) {
            font-size: 3rem;
        }

        @media (max-width: 768px) {
            font-size: 2.5rem;
        }

        @media (max-width: 640px) {
            font-size: 2rem;
        }

        @media (max-width: 475px) {
            font-size: 1.75rem;
        }
    }

    div span p {
        font-size: 1.15rem;
        width: 47rem;

        @media (max-width: 1024px) {
            font-size: 1.3rem;
            width: auto;
        }

        @media (max-width: 768px) {
            font-size: 1.3rem;
            width: auto;
        }

        @media (max-width: 640px) {
            font-size: 1.3rem;
            width: auto;
        }

        @media (max-width: 475px) {
            font-size: 1rem;
            width: auto;
        }
    }

    div a {
        width: 177px;
        height: 59px;
        padding: 20px 35px;
        background: transparent;
        border-radius: 40px;
        font-size: 1.12rem;
        text-transform: capitalize;
        font-weight: 700;
        color: var(--primaryColor);
        background: url(${btnBorder});
    }

    div a:hover {
        background: linear-gradient(90deg, #fd005b 0%, #bb00fd 100%);
        width: 177px;
        height: 59px;
    }
`;