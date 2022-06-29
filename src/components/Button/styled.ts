import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 11px;
  box-shadow: 0 0 2px #0000007d;
  background: linear-gradient(#f0f0f0, #d4d4d4);
  color: #42403d;
  min-width: fit-content;
  
  :hover {
    background: linear-gradient(#ffffff, #f0f0f0);
    box-shadow: 0 0 2px #000000d4
  }
`;

export const StyledLabel = styled.div`
  display: flex;
  align-items: baseline;
`;
