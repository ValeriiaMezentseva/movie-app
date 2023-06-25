import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLogo = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  margin-right: 45px;

  @media screen and (min-width: 768px) {
   margin-right: 45px;
  }

  img {
    border: none; 
    animation: spin 8s infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

`;

