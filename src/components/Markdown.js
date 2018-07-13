import styled from 'styled-components';
import { colors } from '../styles';

const Markdown = styled.div`
  a {
    color: ${colors.link};
    text-decoration: underline;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 600;
  }
`;

export default Markdown;
