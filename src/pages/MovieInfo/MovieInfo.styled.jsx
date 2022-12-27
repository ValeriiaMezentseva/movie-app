import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.main`

max-width: 960px;
margin: 0 auto;
padding: 0 16px;
`

export const InfoWrapper = styled.div`
margin-top: 10px;
display: flex;
gap: 20px;
padding: 10px;
border: 10px solid black;
border-radius: 10px;
 box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const MovieDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledLink = styled(NavLink)`
display: block;
padding: 6px 10px;
font-size: 16px;
font-weight: 500;
text-decoration: none;
text-transform: uppercase;
color: #000000;
border: 2px solid black;
transition: color 200ms linear;
&:hover:not(.active) {
    color: #bd0000;
    border-color: #bd0000;
  }
  
  &.active {
    color: #bd0000;
    border-color: #bd0000;;
  }
`;

export const MoreInfoList = styled.ul`
list-style: none; 
display: flex;
justify-content: center;
padding: 10px;
`

export const MoreInfoItem = styled.li`
margin-left: 20px;
`;

export const AdditionalInfo = styled.h2`
margin-top: 30px;
margin-bottom: 10px;
font-size: 24px;
text-align: center; 
`;