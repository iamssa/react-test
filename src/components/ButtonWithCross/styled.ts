import styled from 'styled-components';

export const StyledButtonWithCross = styled.div`
  position: relative;
  display: flex;
  min-width: 100px;
  padding: 0;
  padding-left: 10px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 2px #0000007d;
  background: #707275;
  color: white;
  justify-content: space-between;
  align-items: center
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Separator = styled.div`
  border-left: 1px solid white;
  margin: 5px 0;
  margin-left: 10px;
`;

export const StyledButton = styled.button`
  box-shadow: none;
  border: none;
  background-color: transparent;
  padding: 0;
  padding: 5px 10px;
  color: white;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  
  :hover {
    background-color: #545658;
    cursor: pointer;
  }
`;
