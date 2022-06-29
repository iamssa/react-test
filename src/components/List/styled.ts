import styled, { css } from 'styled-components';

export const SelectedItem = styled.div`
  padding: 5px 10px;
  font-size: 15px;
  background-color: #eae9e9;
`;

export const Item = styled.button<{isSelected: boolean}>`
  padding: 5px 10px;
  font-size: 15px;
  border: none;
  width: 100%;
  text-align: start;
  background-color: #eae9e9;
  
  ${p =>
  p.isSelected ?
    css`
      ::before {
        content: '\\002192 \\00a0'; 
        }
      ` :
    css`
      padding-left: 29px;
    `
  }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid white;
  background-color: #eae9e9;
  box-shadow: 0 0 2px #0000007d;
  width: 180px;
`;
