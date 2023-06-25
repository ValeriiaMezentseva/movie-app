import styled from "@emotion/styled";

export const Container = styled.main`
  width: 100%;
  /* margin: 0 auto;
  padding: 0 16px; */

      /* @media screen and (min-width: 480px) {
   width: 450px;
  }

     @media screen and (min-width: 678px) {
   width: 650px;
  }

  @media screen and (min-width: 940px) {
    width: 800px;
  } */


`;

export const InfoWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
  gap: 20px;
  padding: 25px;
  max-width: 100%;
  border: 3px solid black;
  background-color: ${props => props.theme.colors.backgroundColor};
  border-radius: 24px;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
   @media screen and (min-width: 770px) {
  flex-direction: row;
  }
`;

export const Image = styled.img`
 width: 280px;
 margin-top: 18px; 
  
  @media screen and (min-width: 480px) {
    padding-left: 10px;
    margin-top: 0; 
    width: 300px; 
  }
  
  @media screen and (min-width: 940px) {
     padding-left: 0; 
  }

`

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
 align-items: flex-start;

        @media screen and (min-width: 480px) {
   width: 410px;
    align-items: center;
  }
  
    @media screen and (min-width: 678px) {
    width: 480px;

  }

    @media screen and (min-width: 770px) {
    width: 300px;
    align-items: flex-start; 
  }
  @media screen and (min-width: 940px) {
    width: 470px;
  }
`;

export const ShortInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px; 

`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.primaryDarkText};
  margin: 0; 
`;

export const InfoItem = styled.span`
  padding: 5px;
  margin-right: 10px;
  color: ${props => props.theme.colors.primaryDarkText};
`;

export const OverView = styled.p`
  text-align: justify;
  margin-right: 20px;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.primaryDarkText};

     @media screen and (min-width: 678px) {
     margin-bottom: 30px;
  }
`;

export const BottomInfo = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.primaryDarkText};

         @media screen and (min-width: 480px) {
   margin-right: 130px;
  }
           @media screen and (min-width: 678px) {
  margin-right: 100px;
  }
`;

export const BottomTitleInfo = styled.span`
  font-weight: 600;
  margin-bottom: 6px;
  color: ${props => props.theme.colors.primaryDarkText};
`;

export const BottomInfoList = styled.div`
  display: flex;
  margin-left: 16px;
  margin-right: 16px; 
`;

export const AddButton = styled.button`
  display: flex;
 
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px 16px;
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 8px;
  background-color: ${props =>
    props.disabled ? "gray" : "black"};
  color: white;
  font-size: 15px;
  font-weight: bold;
  border: none;
  outline: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background-color: ${props =>
      props.disabled ? "gray" : "black"}; // Use gray color for disabled button
  }

  &:active {
    transform: scale(0.95);
  }

`;

export const ButtonsBox = styled.div`
  display: flex;

`;