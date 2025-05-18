import styled from "styled-components";

export const Wrap = styled.div`
  width: 1536px;
  margin: auto;
  padding-left: 50px; 
  padding-right: 50px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


@media (max-width: 1536px) {
   width: 1366px;
}

@media (max-width: 1366px) {
    width: 1280px;
}

@media (max-width: 1280px) {
    width: 1024px;
    padding-left: 20px;
    padding-right: 20px;
}

@media (max-width: 1024px) {
    width: 768px;
}

@media (max-width: 768px) {
    width: 640px;
}

@media (max-width: 640px) {
    width: 475px;
}
@media (max-width: 475px) {
    width: 380px;
  }
`;

export const Title = styled.div`
    position: relative;
    margin-bottom: 50px;

    h1 {
        color: #ffffff0d;
        font-size: 3.8rem;
        text-transform: uppercase;

        @media (max-width: 1024px) {
            font-size: 3rem;
            width: auto;
        }

        @media (max-width: 768px) {
            font-size: 2.8rem;
            width: auto;
        }

        @media (max-width: 640px) {
            font-size: 2.5rem;
        }

        @media (max-width: 475px) {
            font-size: 2.5rem;
        
    }
    }

    h3 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        color: var(--secondaryColor);
        text-transform: uppercase;
        
        @media (max-width: 1024px) {
            font-size: 1rem;
        }

        @media (max-width: 768px) {
            font-size: 1rem;
        }

        @media (max-width: 640px) {
            font-size: .9rem;
        }

        @media (max-width: 475px) {
            font-size: .9rem;
        
        }
    }
`