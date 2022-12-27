import styled from "@emotion/styled";

export const Poster = styled.img`
 width: 400px;
 height: 535px;
 object-fit: cover;
 border-top-left-radius: 6px;
 border-top-right-radius: 6px;
`;

export const Info = styled.div`
padding-top: 12px;
padding-left: 12px;
`;

export const Title = styled.h2`
text-decoration: none; 
margin: 0; 
font-size: 20px;
letter-spacing: 0.04em;
`

export const MovieInfo = styled.p`
font-size: 14px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0.04em;
`; 


export const Rating = styled.span`
margin-left: 10px;
background-color: orange;
padding: 3px 12px;
color: #000;
border-radius: 5px;
`