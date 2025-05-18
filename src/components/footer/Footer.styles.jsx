import styled from "styled-components";
    


export const FooterStyle = styled.footer`
height: auto;
display: flex;
flex-direction: column;
width: 100%;
/* justify-content: center; */
align-items: center;

@media (max-width: 475px) {
            /* height: 15vh; */
        }

span {
    background-color: #c5bfbf3b;
    display: inline-block;
    width: 100%;
    height: .5px;
}
`;

export const FooterContent = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
padding: 0 20px;
height: 25vh;

@media (max-width: 475px) {
            height: 15vh;;
        }

div {
    width: auto;
    font-size: 2.25rem;

    @media (max-width: 1024px) {
            font-size: 2rem;
            width: 100%;
        }
    
    @media (max-width: 768px) {
            font-size: 1.5rem;
            width: 100%;
        }
    
    @media (max-width: 640px) {
            font-size: 1.1rem;
            width: 100%;
        }
    
    @media (max-width: 475px) {
            font-size: 1rem;
            width: 100%;
        }

}

small {
    @media (max-width: 475px) {
            font-size: .5rem;

        }
}
`;