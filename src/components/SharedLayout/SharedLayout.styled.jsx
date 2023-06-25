import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';
import { BiMoviePlay, BiTv } from 'react-icons/bi';
import { FiHeart, FiMenu } from "react-icons/fi";
import { BsStars } from 'react-icons/bs';
import { IoClose } from "react-icons/io5";


export const IconHome = styled(AiOutlineHome)`
margin-right: 10px;
font-size: 20px; 
`;

export const IconMovies = styled(BiMoviePlay)`
margin-right: 10px;
font-size: 20px;
`;

export const IconTV = styled(BiTv)`
margin-right: 10px;
font-size: 20px;
`;

export const IconFav = styled(FiHeart)`
margin-right: 10px;
font-size: 20px;
`;

export const IconWatchList = styled(BsStars)`
margin-right: 10px;
font-size: 20px;
`;


export const Container = styled.div`
min-height: 100vh;

  background-image: linear-gradient(
    180deg,
    ${props => props.theme.colors.backgroundColor} 58.58%,
    rgba(0, 0, 0, 0.6) 100%
  ), url(${props => props.theme.images.background});
  background-repeat: repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  margin: 0 auto;
  padding: 10px; 
   @media screen and (min-width: 1280px){
    background-size: contain;

  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  gap: 12px;
  padding: 10px 20px;
  margin-bottom: 16px;
  max-width: 100%; 


`;

export const Nav = styled.nav`
  display: flex;
   align-items: center;
   margin-left: 15px;
        @media screen and (min-width: 1079px) {
      margin-left: 75px;
  }
`;

export const Menu = styled.div`
    display: none; 

      @media screen and (min-width: 768px) {
     display: flex;
  }
`


export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  margin-right: 30px;
  border-radius: 4px;
  text-decoration: none;
  color: ${props => props.theme.colors.primaryDarkText};
  font-weight: 500;

  &.active {
    color: ${props => props.theme.colors.primaryLightText};
    background-color: ${props => props.theme.colors.redColor};
  }
  &:hover {
    box-shadow: 0px 0px 8px 0px rgba(189, 0, 0, 0.5);
    transition: box-shadow 0.3s ease;
  }
`;


export const Collection = styled.div`
   display: none; 

     @media screen and (min-width: 1079px) {
     display: flex;
   align-items: center;
  }
`

export const Footer = styled.footer`
  position: relative;
  margin-top: 20px; 
  color: ${props => props.theme.colors.primaryDarkText};
  
`; 

export const FooterText = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
   height: 30px;
   padding: 10px 10px; 
  background-color: ${props => props.theme.colors.backgroundColor};

  span {
    font-family: Poppins;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.01em;
    text-align: left;
    margin-right: 5px; 
    
    
  }
`; 

export const MobileMenuButton = styled.button`
   display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 1079px) {
    display: none; 
  }

`;

export const MobileMenuClose = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 1079px) {
    display: none; 
  }
`

export const MobileMenuTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
`

export const MobileMenuIcon = styled(FiMenu)`
  font-size: 34px;
  color: ${props => props.theme.colors.primaryDarkText};
`;

export const MobileMenuCloseIcon = styled(IoClose)`
    font-size: 34px;
  color: ${props => props.theme.colors.primaryDarkText};
`

export const MobileMenuBox = styled.div`
  position: fixed;
  top: 0;
  right: ${props => (props.isOpen ? "0" : "-100%")};
  width: 80%;
  max-width: 320px;
  height: 100%;
  background-color: ${props => props.theme.colors.backgroundColor};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
  transition: right 0.3s ease;

  @media screen and (min-width: 1079px) {
    display: none;
  }
  
`;


export const MobileNav = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column;
  margin-top: 70px;
  gap: 10px;
`; 

export const ThemeButton = styled.div`
  position: fixed;
  top: 5px;
  right: 160px;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
`