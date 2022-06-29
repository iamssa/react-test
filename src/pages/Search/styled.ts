import styled from 'styled-components';
import { Container } from '../../components/Container';

export const MediaContainer = styled(Container)`
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
