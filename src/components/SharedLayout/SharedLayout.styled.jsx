import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi';


export const IconHome = styled(AiOutlineHome)`
margin-right: 10px;
font-size: 20px;
`;

export const IconMovies = styled(BiMoviePlay)`
margin-right: 10px;
font-size: 20px;
`;


export const Container = styled.div`
max-width: 100%;
`;

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 12px;
padding: 10px 20px;
margin-bottom: 16px;
border-bottom: 2px solid black;

> nav {
    display: flex;
  }
    
`;

export const Link = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
padding: 8px 16px;
margin-left: 30px;
border-radius: 4px;
text-decoration: none;
color: black;
font-weight: 500;

&.active {
    color: white;
    background-color: #bd0000;
  }
`;