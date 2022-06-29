import styled, { css } from 'styled-components';

export const InputRelativeWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input<{haveIcon: boolean, haveExtra: boolean}>`
  width: 100%;
  height: 38px;
  box-shadow: inset 0 0 2px #0000009e;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  color: #363f46;
  opacity: 0.8;
  
  ${p => p.haveIcon && 'padding-left: 40px;'}
  ${p => p.haveExtra && 'padding-right: 40px;'}
  
  :focus {
    outline: white solid 1px;
    font-weight: 500;
    opacity: 1;
  }
`;

export const IconWrapper = styled.div<{iconAlign: 'left' | 'right'}>`
  position: absolute;
  top: 0;
  width: 40px;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  ${p =>
  p.iconAlign === 'left' &&
  css`
      left: 0;
      display: flex;
    `}

  ${p =>
  p.iconAlign === 'right' &&
  css`
      right: 0;
      pointer-events: auto;
      cursor: pointer;
      
      ${InputRelativeWrapper}:hover & {
        display: flex;
      }
    `}
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
