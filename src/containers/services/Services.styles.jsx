import styled from "styled-components";
export const ServicesStyle = styled.section`
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    text-align: center;
    height: auto;
    padding-bottom: 10%;

    @media (max-width: 1024px) {
        height: auto;
        padding-bottom: 10%;
        }

    @media (max-width: 768px) {
        height: auto;
        padding-bottom: 10%;
    }

    @media (max-width: 640px) {
        height: auto;
        padding-bottom: 10%;
    }

    @media (max-width: 475px) {
            height: auto;
            padding-bottom: 10%;
        }

    p {
        font-size: 1.5rem;
        font-weight: 200;
        margin-bottom: 40px;
    }

    article {
        /* display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, auto));
        gap: 20px;
        justify-content: center;
        align-items: center; */
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        
    
/* @media (max-width: 1366px) {
    flex-wrap: wrap;
} */

@media ((min-width: 1025px) and (max-width: 1280px)) {
        display: grid;                                  
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 30px; 
}




    @media (max-width: 1024px) {
        flex-wrap: wrap;
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }

    @media (max-width: 640px) {
        flex-wrap: wrap;
    }

    @media (max-width: 475px) {
        /* flex-direction: column; */
        /* gap: 30px; */
        flex-wrap: wrap;
    }
    }

    article Icon {
        font-size: 3rem;
        
    }
`