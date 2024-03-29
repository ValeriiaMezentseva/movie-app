import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


export const Link = styled(NavLink)`
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.colors.primaryDarkText};
  font-weight: 500;

  &.active {
    color: ${props => props.theme.colors.primaryLightText};
    background-color: ${props => props.theme.colors.redColor};
  }
`;


export const Title = styled.h2`
  text-align: center;
   font-size:16px; 
  margin-bottom: 0;
    text-transform:uppercase; 
    color: ${props => props.theme.colors.primaryDarkText};
    text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
    0px -4px 10px rgba(255,255,255,0.3);
       @media screen and (min-width: 480px){
     font-size:20px; 

  }
`;

export const PageTitle = styled.h1`
  font-size:20px; 
  font-weight:700;  
  letter-spacing:1px; 
  text-transform:uppercase; 
  text-align:center; 
  margin:auto;
  color: ${props => props.theme.colors.primaryDarkText};
  
   padding-bottom:13px;

text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
    0px -4px 10px rgba(255,255,255,0.3);

   @media screen and (min-width: 480px){
     font-size:26px; 

  }
`; 

export const Container = styled.main`
  margin: 0;
  padding: 0;
width: 100%

`;

export const TrendingBox = styled.div`
  margin-bottom: 30px;
  border-radius: 10px;
  overflow: hidden;
`;

export const TrendingList = styled.div`
display: flex; 
align-items: center;
border-radius: 10px;
margin-top: 8px; 
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

`;

export const ListBox = styled.div`
  display: flex;  
  flex-direction: column; 
  margin: 10px;


`; 

export const MovieList = styled.ul`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 0;
  margin: 10px;
  list-style-type: none;
 

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    flex-shrink: 0;
    margin-right: 14px;
  }
`;

export const ScrollButton = styled.button`
 display: none;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.redColor};
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  margin: 0 5px;
  transition: opacity 200ms ease-in-out;

  &:hover {
    color: #ec0000;
    transform: scale(1.2);
    transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
  }
         @media screen and (min-width: 480px){
       display: flex;

  }
`;

export const ScrollLeftButton = styled(ScrollButton)`
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
 
`;

export const ScrollRightButton = styled(ScrollButton)`
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
 
`;

export const MovieCardBox = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 250px;
  min-height: 350px;
  border-radius: 6px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 600ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const MovieCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`; 


export const Poster = styled.img`
  flex: 1;
  object-fit: cover;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;


export const Rating = styled.span`
  margin-left: 10px;
  background-color: orange;
  padding: 3px 8px;
  color: ${props => props.theme.colors.primaryDarkText};
  border-radius: 5px;
     position: absolute;
    top: 12px;
    right: 12px;
    z-index: 1;
`;