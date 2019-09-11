import styled from 'styled-components';
import { theme, mediaUp } from '../GlobalStyle';

const Container = styled.div`
  width: 1440px;
  max-width: 100%;
  padding-left: ${theme.spacer};
  padding-right: ${theme.spacer};
  margin-left: auto;
  margin-right: auto;
  
  ${mediaUp.lg`
    padding-left: ${theme.spacerLg};
    padding-right: ${theme.spacerLg};
  `}
`;

export default Container;