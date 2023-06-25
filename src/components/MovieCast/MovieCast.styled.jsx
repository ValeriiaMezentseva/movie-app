import styled from "@emotion/styled";

export const CastList = styled.ul`
list-style: none; 
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 20px 0;
`;

export const CastItem = styled.li`
border: 2px solid black; 
padding: 5px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const Img = styled.img`
  height: 160px;
  object-fit: cover;
  margin-bottom: 8px;
`;

export const Name = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.primaryDarkText};
`;

export const Character = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  width: 200px;
  color: ${props => props.theme.colors.primaryDarkText};
`;

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
