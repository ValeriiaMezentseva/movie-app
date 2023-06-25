import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLogo = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-right: 45px;

  @media screen and (min-width: 768px) {
    /* width: 44px;
    height: 44px; */
  }

  img {
    /* width: 28px;
    height: 28px; */

    /* stroke: #fafafa; */

    @media screen and (min-width: 768px) {
      /* width: 30px;
      height: 30px; */
    }

    /* Add animation styles */
    animation: spin 8s infinite;
  }

  /* Define the keyframes for the spin animation */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

`;

