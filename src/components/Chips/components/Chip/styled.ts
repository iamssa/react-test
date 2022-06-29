import styled from 'styled-components';

export const TransparentChip = styled.div`
  color: #707275;
  cursor: pointer;
  padding: 3px 6px;
  font-size: 14px;
`;

export const ActiveChip = styled(TransparentChip)`
  background-color: #707275;
  color: #e1e2e3;
  border-radius: 5px;
`;
