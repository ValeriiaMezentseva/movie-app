import styled from "@emotion/styled";



export const MovieCardContainer = styled.div`
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



export const Info = styled.div`
  padding-top: 12px;
  padding-left: 12px;
  color: ${props => props.theme.colors.primaryDarkText};
`;

export const Title = styled.h2`
  text-decoration: none;
  margin: 0;
  font-size: 16px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.primaryDarkText};
`;

export const MovieInfo = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.primaryDarkText};
`;

export const Rating = styled.span`
  margin-left: 10px;
  background-color: orange;
  padding: 3px 8px;
  color: ${props => props.theme.colors.primaryDarkText};
  border-radius: 5px;
`;