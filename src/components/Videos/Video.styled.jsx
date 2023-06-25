import styled from "@emotion/styled";

import { BsFillPlayBtnFill } from 'react-icons/bs'; 


export const Button = styled.button`
display: block;
padding: 6px 10px;
font-size: 16px;
font-weight: 500;
text-decoration: none;
text-transform: uppercase;
background-color: transparent;
color: ${props => props.theme.colors.primaryDarkText};
cursor: pointer; 
border: 2px solid black;
transition: color 200ms linear;
&:hover:not(.active) {
    color: ${props => props.theme.colors.redColor};
    border-color: ${props => props.theme.colors.redColor};
  }
  
  &.active {
  color: ${props => props.theme.colors.redColor};
    border-color: ${props => props.theme.colors.redColor};
  }

    &:disabled { 
    pointer-events: none;
    background-color: ${props => props.theme.colors.primaryLightText};
    border-color: ${props => props.theme.colors.tertiaryLightText};
  }
`;

export const BtnText = styled.span`
  padding: 0;
  display: flex; 
  align-items: center; 
  text-align: center; 
`;

export const Icon = styled(BsFillPlayBtnFill)`
  padding: 0; 
  margin: 0; 
  margin-left: 8px; 
`

