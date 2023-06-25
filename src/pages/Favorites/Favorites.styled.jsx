import styled from "@emotion/styled";
import favorites from '../../images/favorites.png'

export const Title = styled.h2`
text-align: center;
color: ${props => props.theme.colors.primaryDarkText};
text-transform: uppercase;
`; 

export const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
padding: 0 16px;
`;

export const NoMoviesBox = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`; 

export const NoMovieImg = styled.span`
 background-image: url(${favorites});
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