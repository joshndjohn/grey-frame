import styled from "styled-components";

export const GalleryStyle = styled.section`
height: auto;
`

export const VideoBoxes = styled.div`
display: flex;
flex-direction: column;
gap: 50px;
align-items: center;
`;
export const VideoBox = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
justify-content: center;

p {
    font-size: 1.5rem;
    font-weight: 350;
    text-transform: capitalize;
    text-align: center;
}

`;
export const Videos = styled.div`
display: flex;
gap: 25px;
/* flex-wrap: wrap; */
justify-content: center;

@media (max-width: 768px) {
            flex-wrap: wrap;
        }

@media (max-width: 640px) {
            flex-direction: column;
        }

@media (max-width: 475px) {
            flex-direction: column;
        }
`;