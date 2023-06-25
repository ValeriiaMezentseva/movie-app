import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.main`
max-width: 960px;
margin: 0 auto;
padding: 0 16px;

`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 20px;
  padding: 10px;
  border: 10px solid black;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  @media screen and (min-width: 640px) {
    flex-direction: row;
    align-items: flex-start;
  }

`;

export const Image = styled.img`
width: 280px;

  @media screen and (min-width: 456px) {
    width: 360px;
    }

   @media screen and (min-width: 640px) {
    width: 260px; 
    }

      @media screen and (min-width: 700px) {
    width: 300px;

    }
`;

export const MovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px; 

      @media screen and (min-width: 385px) {
    width: 320px;
    align-items: center; 
    }

     @media screen and (min-width: 456px) {
    width: 400px;
    
    }

       @media screen and (min-width: 576px) {
    width: 510px;
    }

         @media screen and (min-width: 640px) {
    width: 280px;
    margin-left: 20px; 
    }

    @media screen and (min-width: 738px) {
   width: 360px;
    margin-left: 0px; 
    }
      @media screen and (min-width: 800px) {
   width: 450px;
   align-items: flex-start; 
  }

         @media screen and (min-width: 880px) {
   width: 600px;
  }
`;

export const StyledLink = styled(NavLink)`
display: block;
padding: 6px 10px;
font-size: 16px;
font-weight: 500;
text-decoration: none;
text-transform: uppercase;
color: ${props => props.theme.colors.primaryDarkText};
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
`;

export const MoreInfoList = styled.ul`
list-style: none; 
display: flex;
margin-top: 10px; 
padding: 0; 

 @media screen and (min-width: 895px) {
   margin-top: 40px; 
  }
`

export const MoreInfoItem = styled.li`
margin-right: 20px;
`;


export const ShortInfo = styled.div`
  display: flex; 
  align-items: center;
`; 

export const Title = styled.h2`
color: ${props => props.theme.colors.primaryDarkText};
`;

export const InfoItem = styled.span`
padding: 5px; 
margin-right: 10px; 
color: ${props => props.theme.colors.primaryDarkText};
  
`; 

export const OverView = styled.p`
 text-align: justify; 
 margin-right: 20px; 
 margin-top: 30px; 
 margin-bottom: 10px; 
 color: ${props => props.theme.colors.primaryDarkText};
   @media screen and (min-width: 802px) {
  margin-top: 30px;
  }
`; 

export const BottomInfo = styled.div` 
margin-bottom: 10px;  
margin-right: 20px; 
display: flex;
flex-direction: column;
color: ${props => props.theme.colors.primaryDarkText};
`; 

export const BottomTitleInfo = styled.span`
  font-weight: 600;
  margin-bottom: 6px; 
  color: ${props => props.theme.colors.primaryDarkText};
`;

export const BottomInfoList = styled.div`
 display: flex;
 
`; 

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px 20px;
  margin-right: 10px;
  margin-top: 10px; 
  border-radius: 8px;
  background-color: black;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border: none;
  outline: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background-color: black;
  }

  &:active {
    transform: scale(0.95);
  }

      @media screen and (min-width: 740px) {
    font-size: 16px;
    }
`;

export const ButtonsBox = styled.div`
  display: flex; 
`; 

