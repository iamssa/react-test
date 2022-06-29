import Modal from 'react-modal';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
    width: 500px;
    height: fit-content;
    left: 50%;
    margin-left: -250px;
    top: 50%;
    margin-top: -250px;
    position: absolute;
    border: 1px solid #ccc;
    background: #fff;
    overflow: auto;
    Webkit-overflow-scrolling: touch;
    border-radius: 4px;
    outline: none;
    padding: 20px;
  
    .ReactModal__Overlay {
      background-color: rgb(56 52 52 / 75%);
    }
`;
