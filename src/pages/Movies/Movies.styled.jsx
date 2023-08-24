import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;

export const Title = styled.h1`
  font-size:20px; 
  font-weight:700;  
  letter-spacing:1px; 
  text-transform:uppercase; 
  text-align:center; 
  color: ${props => props.theme.colors.primaryDarkText};
  
   padding-bottom:13px;

text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
    0px -4px 10px rgba(255,255,255,0.3);

   @media screen and (min-width: 480px){
     font-size:26px; 

  }
margin-top: 60px; 
color: ${props => props.theme.colors.primaryDarkText};
     @media screen and (min-width: 768px){
  margin-top: 40px; 

  }
`; 

export const SearchButton = styled.div`
  position: absolute;
  top: 88px;
  right: 10px; 
  margin-top: 10px; 
  

     @media screen and (min-width: 1079px){
   right: 70px;

  }
`;