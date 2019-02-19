import React from 'react';
import styled, { css } from 'styled-components';
import { clearFix, shade } from 'polished';
import logo2x from '../assets/logo@2x.png';
import { spacing, media, uppercase, colors } from '../../../styles';
import Button from '../../../components/Button';
import Sidebar from '../../../components/Sidebar';

const Root = styled.header`
  ${clearFix()};
  height: 34px;
  padding: 0;

  ${media.min768} {
    padding: ${spacing()} 0;
    height: 98px;
  }

  ${media.max768} {
    padding: ${spacing(0.5)};
  }

  ${media.max375} {
    padding: 0;
  }
`;


export default class Announcement extends React.Component {
  state = {
    showSidebar: false,
  };

  render() {
    return (
      <Root>
      </Root>
    );
  }
}
