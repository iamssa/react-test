import styled from 'styled-components';

export const Container = styled.div`  
  p {
    margin: 0;
    text-indent: 20px;
    font-size: 15px;
    margin-bottom: 20px;
    margin-left: -20px;
  }
`;

export const SubHeader = styled.div`
  margin: 0;
  color: black;
`;

export const BulletList = styled.ul`
  padding: 0;
  list-style-type: none;
  
  li::before {
    content: "- "
  }
`;

export const NumberedList = styled.ol`
  column-count: 2;
  column-gap: 85px;
  column-rule: 1px solid #707275;
  margin 0;
  padding: 0;
  font-size: 15px;
  padding-left: 20px;
  
  li {
    margin-top: 5px;
  }
  
  li::marker {
    font-weight: bold;
    font-size: 13px;
  }
`;
