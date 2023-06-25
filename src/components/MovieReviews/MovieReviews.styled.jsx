import styled from "@emotion/styled";

export const ReviewsList = styled.ul`
list-style: none; 
padding: 20px 0;
`;

export const ReviewsItem = styled.li`
  margin-bottom: 24px;
  padding: 10px;
  border: 2px solid black; 
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const Author = styled.p`
  margin-bottom: 8px;
  color: ${props => props.theme.colors.primaryDarkText};

`;

export const AuthorTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.theme.colors.primaryDarkText};
`;

export const Content = styled.p`
color: ${props => props.theme.colors.primaryDarkText};
`

export const NoCast = styled.h2`
 font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: ${props => props.theme.colors.primaryDarkText};
  text-shadow:
             1px 10px 5px ${props => props.theme.colors.primaryDarkText},
             1px 25px 50px ${props => props.theme.colors.primaryDarkText};
  background-clip: text;
  -webkit-background-clip: text;
`;  