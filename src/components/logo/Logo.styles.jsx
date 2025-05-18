import styled from "styled-components";

const LogoStyle = styled.div`
    font-size: 1.75rem;
    font-family: 'Montserrat', 'Poppins', sans-serif;
    width: 332px;
    font-weight: 700;
    line-height: 34px;
    background: linear-gradient(90deg, #FD005B 0%, #BB00FD);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;


    @media (max-width: 1024px) {
    font-size: 1.5rem;
    }

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 640px) {
        font-size: 1.5rem;
    }

    @media (max-width: 475px) {
            font-size: 1.2rem;
    }
`

export default LogoStyle;