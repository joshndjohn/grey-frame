import styled, { css, keyframes } from "styled-components";
import { Icon } from '@iconify/react';

export const ContactStyle = styled.section`
height: auto;
`;

export const ContactBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 100px;
width: 1040px;
padding-bottom: 100px;



@media (max-width: 475px) {
            padding-bottom: 15%;
            gap: 50px;
        }
`;

export const ContactForm = styled.form`
height: 743px;
padding: 0 40px;
width: 1040px;
border-radius: 10px;
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(255, 255, 255, 0.1);
border: .5px solid rgba(255, 255, 255, .5);

@media (max-width: 1280px) {
            height: auto;
            width: 85%;
            padding: 5%;
        }

@media (max-width: 1024px) {
            height: auto;
            width: 60%;
            padding: 5%;
        }

@media (max-width: 768px) {
            height: auto;
            width: 55%;
            padding: 5%;
        }

@media (max-width: 640px) {
            height: auto;
            width: 40%;
            padding: 5%;
        }

@media (max-width: 475px) {
            height: auto;
            width: 35%;
            padding: 5%;
        }
label {
    font-size: .875rem;
    font-weight: 600;
    
}

span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 905px;
}
`;

export const FormRow = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 640px) {
            flex-direction: column;
            gap: 20px;
        }
    
    @media (max-width: 475px) {
            flex-direction: column;
            gap: 20px;
        }

    div {
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: start;
    }

    div input, div select {
        width: 450px;
        height: 60px;
        border-radius: 5px;
        border: none;
        background-color: var(--primaryColor);
        outline: none;
        padding-left: 10px;
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.8);

        @media (max-width: 1280px) {
            width: 400px;
        }

        @media (max-width: 1024px) {
            width: 280px;
        }
        
        @media (max-width: 768px) {
            width: 250px;
        }
        
        @media (max-width: 640px) {
            width: 350px;
        }
        
        @media (max-width: 475px) {
            width: 300px;
        }
    }

    select option:hover {
        background-color: var(--myBlack);
        color: var(--primaryColor);
    }

    div input::-webkit-input-placeholder {
        font-size: .875rem;
        color: rgba(0, 0, 0, 0.4);
        font-weight: 500;
    }
    `;

export const SubmitRow = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;

    div {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 5px;
    }

    textarea {
        width: 100%;
        height: 200px;
        border-radius: 5px;
        outline: none;
        padding-left: 10px;
        resize: none;
        
        @media (max-width: 640px) {
            width: 350px;
        }
        
        @media (max-width: 475px) {
            width: 300px;
        }
    }

    textarea::-webkit-input-placeholder {
        font-size: .875rem;
        color: rgba(0, 0, 0, 0.4);
        font-weight: 500;
    }
`;
  
export const SubmitButton = styled.button.attrs(props => ({
    disabled: props.$loading,
  }))`
    height: 60px;
    border-radius: 30px;
    border: none;
    background: linear-gradient(90deg, #FD005B 0%, #BB00FD);
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--primaryColor);
    cursor: pointer;
  
    display: inline-flex;
    align-items: center;
    justify-content: center;
  
    /* dim & prevent clicks during loading */
    ${props => props.$loading && css`
      opacity: 0.7;
      cursor: not-allowed;
    `}
  `;

const fadeIn = keyframes`
from { opacity: 0; transform: translateY(-10px); }
to   { opacity: 1; transform: translateY(0);      }
`;

const fadeOut = keyframes`
from { opacity: 1; transform: translateY(0);       }
to   { opacity: 0; transform: translateY(-10px);   }
`;

export const Toast = styled.div`
position: fixed;
bottom: 20px;
right: 20px;
background:${props =>
    props.$type === "error" ? '#FD005B' : "#1A8F6F" /* green-400 */};
color: white;
padding: 12px 20px;
border-radius: 4px;
box-shadow: 0 2px 6px rgba(0,0,0,0.2);
animation: ${props => props.$visible ? fadeIn : fadeOut} 0.3s forwards;
`;

export const ErrorToast = styled.div`
position: fixed;
bottom: 20px;
right: 20px;
background: var(--secondaryColor);
color: white;
padding: 12px 20px;
border-radius: 4px;
box-shadow: 0 2px 6px rgba(0,0,0,0.2);
animation: ${props => props.$visible ? fadeIn : fadeOut} 0.3s forwards;
`;

const spin = keyframes`
from { transform: rotate(0deg); }
to   { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
border: 2px solid rgba(255,255,255,0.3);
border-top: 2px solid white;
border-radius: 50%;
width: 16px;
height: 16px;
animation: ${spin} 0.6s linear infinite;
`;


export const ErrorText = styled.p`
  font-size: 0.8rem;
  color: #FF4D4D;
  margin-top: 0.25rem;
`;

export const ContactAddress = styled.div`
display: flex;
justify-content: space-between;
width: 100%;

    @media (max-width: 1280px) {
                width: 85%;
            }

    @media (max-width: 1024px) {
            width: 60%;
            }    

    @media (max-width: 768px) {
                flex-direction: column;
                gap: 40px;
            }

    @media (max-width: 640px) {
                flex-direction: column;
                gap: 40px;
            }

    @media (max-width: 475px) {
                flex-direction: column;
                gap: 40px;
            }
`;

export const AddressBox = styled.div`
display: flex;
gap: 30px;
align-items: center;

@media (max-width: 1024px) {
    flex-direction: column;
            align-items: center;
            gap: 20px;     
            }

@media (max-width: 768px) {
    flex-direction: column;
            align-items: center;
            gap: 20px;
        }

@media (max-width: 640px) {
    flex-direction: column;
            align-items: center;
            gap: 20px;
        }

@media (max-width: 475px) {
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

span {
border : 1px solid var(--secondaryColor);
border-radius: 100%;
height: 60px;
width: 60px;
display: flex;
justify-content: center;
align-items: center;
}
`;

export const AddressText = styled.div`
display: flex;
flex-direction: column;
gap: 5px;

@media (max-width: 1024px) {
            align-items: center;
        }

@media (max-width: 768px) {
            align-items: center;
        }

@media (max-width: 640px) {
    align-items: center;
}        

@media (max-width: 475px) {
            align-items: center;
        }

h3 {
    font-size: 1.5rem;
    font-weight: 300;
}
`;

export const ContactIcon = styled(Icon)`
font-size: 1.5rem;
color: var(--secondaryColor);
`;
