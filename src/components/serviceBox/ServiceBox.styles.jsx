import styled from "styled-components";
import { Icon } from '@iconify/react';

export const ServiceBoxStyle = styled.span`
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border: .5px solid rgba(255, 255, 255, 0.5);
  text-align: center;
  transition: transform 0.5s;
  border-radius: 10px;
  width: 300px;
  height: 345px;
  padding-top: 50px;

  h4 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 20px 0;
  }

  p {
    font-size: .85rem;
    font-weight: 400;
  }

  &:hover {
    transform: translateY(-3px);
  }
`

export const StyledIcon = styled(Icon)`
  font-size: 4.3rem;
`