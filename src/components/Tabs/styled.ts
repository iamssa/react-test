import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
  font-size: 30px;
  width: 750px;
  
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  
  &.active {
    color: blue;
    text-decoration: underline;
  };
`;
