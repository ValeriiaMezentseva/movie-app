import styled from "@emotion/styled";
import watchlist from '../../images/watchlist.png'

export const Title = styled.h2`
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
max-width: 1200px;
margin: 0 auto;
padding: 0 16px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const NoMoviesBox = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`; 

export const NoMovieImg = styled.span`
 background-image: url(${watchlist});
  background-size: contain;
  opacity: 0.30;
 border: none; 
  width: 120px;
  height: 120px; 
`

export const NoMoviesText = styled.p`
  color: ${props => props.theme.colors.primaryDarkText};
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
  text-align: center; 
`; 

