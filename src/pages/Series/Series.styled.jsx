import styled from "@emotion/styled";

export const Title = styled.h1`
margin-top: 60px; 
text-align: center;
color: ${props => props.theme.colors.primaryDarkText};
     @media screen and (min-width: 768px){
  margin-top: 40px; 

  }
`; 

export const Container = styled.main`
margin: 0 auto;
padding: 0 16px;
`;

export const SearchButton = styled.div`
  position: absolute;
  top: 88px;
  right: -15px; 
  margin-top: 10px; 
  
     @media screen and (min-width: 1079px){
   right: 70px;

  }
`;