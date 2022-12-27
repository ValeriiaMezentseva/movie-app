import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`

align-items: center;
text-decoration: none;
color: black;
font-weight: 500;

&.active {
    color: white;
    background-color: #bd0000;
  }
`;


export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px 16px;
 
  justify-content: center;
  grid-auto-rows: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 0;
`;

export const MovieCardBox = styled.li`
display: flex;
flex-direction: column;
border-radius: 6px;
border: 1px solid #000;
transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 600ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover,
&:focus {
  transform: scale(1.05);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`