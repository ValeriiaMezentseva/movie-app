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


export const List = styled.ul`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  display: grid;
  max-width: 280px;
  justify-content: center;
  grid-gap: 20px;
  grid-auto-rows: auto; 
  padding-left: 0; 

    @media screen and (min-width: 640px) {
       margin-bottom: 60px;
    max-width: 700px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
  }

        @media screen and (min-width: 940px) {
       grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px 16px;
    max-width: 1200px;
  }

    @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 2fr);
  }
`;

export const SeriesCardBox = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-radius: 6px;
  cursor: pointer; 
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 600ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`