import logo from '../../images/Logo.png'; 

import { StyledLogo } from './Logo.styled'; 

const Logo = () => {
  return (
    <StyledLogo to="/">
          <img src={logo} alt="logo" />
    </StyledLogo>
  );
};

export default Logo; 