import styled from "styled-components";
import { aboutImage } from "../../utils/constants";

export const AboutStyle = styled.section`
    height: auto;
    padding-bottom: 10%;
    background-image: linear-gradient(rgba(25, 25, 35, .80), rgba(25, 25, 38, .80)), url(${aboutImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 475px) {
            /* height: auto;
            padding-bottom: 10%; */
        }

    article {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    article h3 {
        font-size: 1.5rem;
        font-weight: 300;
        line-height: 1.5;
        text-align: center; 

        @media (max-width: 475px) {
            font-size: 1.2rem;
            font-weight: 400;
            line-height: 1.2;
        }
    }
`;

export const BoxContainer = styled.div`
    display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   gap: 40px;

   @media (max-width: 475px) {
            /* flex-direction: column;
            justify-content: start;
            gap: 20px; */
        }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    /* @media (max-width: 475px) {
            gap: 20px;
        } */

`;

export const Div = styled.div`
    display: flex;
    gap: 20px;
    font-size: 1.125rem;
    font-weight: 300;

    span {
        width: 19px;
        height: 19px;
        border-radius: 100%;
        border: 1px solid rgba(255, 255, 255, .5);
        background-color: rgba(255, 255, 255, .1);
    }
`;