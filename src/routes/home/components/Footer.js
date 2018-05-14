import React from 'react';
import styled from 'styled-components';
import { mix, clearFix } from 'polished';
import { colors, spacing, uppercase } from '../../../styles';

const Root = styled.footer`
  height: 152px;
  padding: 34px 0;
  background: #405165;
  text-align: center;
  font-size: 15px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: inline-block;
  color: #a4cdff;
`;

const Copyright = styled.div`
  line-height: 84px;
  float: left;
  margin-right: ${spacing()};
  opacity: 0.6;
`;

const Separator = styled.div`
  float: left;
  width: 1px;
  height: 11px;
  margin: 37px 0;
  background: ${colors.textPrimary};
  margin-right: ${spacing()};
  opacity: 0.4;
`;

const Company = styled.div`
  float: left;
  border-left: 1px;
  text-align: left;
  padding: 26px 0 22px;
`;

const Title = styled.h5`
  ${uppercase};
  font-size: 11px;
  opacity: 0.6;
  line-height: 1.5;
  margin: 0;
`;

const Links = styled.div`
  ${clearFix()};
  opacity: 0.5;
`;

const StyledLink = styled.a`
  float: left;
  margin-right: ${spacing()};
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
  line-height: 1;
  color: #a4cdff;
  font-size: 14px;

  &:hover {
    border-color: #a4cdff;
  }
`;

const Footer = () => (
  <Root>
    <Wrapper>
      <Copyright>&copy; BlockCluster {new Date().getFullYear()}</Copyright>
      <Separator />
      <Company>
        <Title>Company</Title>
        <Links>
          <StyledLink href="mailto:team@getpreppy.com">About</StyledLink>
          <StyledLink href="mailto:team@getpreppy.com">Contact</StyledLink>
          <StyledLink href="mailto:team@getpreppy.com">Careers</StyledLink>
        </Links>
      </Company>
    </Wrapper>
  </Root>
);

export default Footer;
