import styled from "@emotion/styled";

export const SearchMoviesForm = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  `;
    
export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${props => props.theme.colors.tertiaryLightText};
  border-radius: 50px;
  overflow: hidden;
  padding: 5px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    
    :hover {
    box-shadow: 2px 2px 3px 0px rgba(189, 0, 0, 0.5);
   
    transition: box-shadow 0.3s ease;

}
`;
export const Input = styled.input`
display: inline-block;
  width: 100%;
  margin-left: 7px; 
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  color: ${props => props.theme.colors.primaryDarkText};
  background-color: transparent;
  ::placeholder {
  font: inherit;
  font-size: 18px;
  background-color: transparent;

}
`;

export const SearchButton = styled.button`
display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.7;
  color: ${props => props.theme.colors.primaryDarkText};
  background-color: transparent;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
  opacity: 1;
  color: #bd0000;
    transform: scale(1.1);
    transition: transform 0.3s ease;

}
`;
// export const LabelBtn = styled.span`
// position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   clip-path: inset(50%);
//   border: 0;
// `;