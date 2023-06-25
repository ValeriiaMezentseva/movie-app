import styled from 'styled-components';

export const SwitchBody = styled.div`
margin: 0; 
  cursor: pointer;
  @media screen and (min-width: 1079px) {
    margin-right: 80px; 
    margin-bottom: 20px; 

  }

`;

export const Input = styled.input`
 visibility: hidden;
 margin: 0; 
 &:checked + label {
    transform: rotate(360deg);
    background-color: #000;
    border-color: white; 
    
    &:before {
        transform: translateX(31px);
        background-color: #FFF;
		}
	} 
`; 

export const Switch = styled.label`
  display: flex;
  width: 61px;
  height: 28px;
  border: 2px solid;
  border-radius: 50px;
  position: relative;
  transition: transform .75s ease-in-out;
  transform-origin: 50% 50%;
  cursor: pointer;
  margin: 0; 
  /* box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1); */
  
  &:before {
    transition: transform .75s ease;
    transition-delay: .5s;
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #000;
    border-radius: 50%;
    top: 4px;
    left: 4px;
  }
`;
