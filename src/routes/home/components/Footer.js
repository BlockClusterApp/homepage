import React from 'react';
import styled from 'styled-components';
import { mix, clearFix } from 'polished';
import { colors, spacing, uppercase } from '../../../styles';

const Root = styled.footer`
  position: relative;
  z-index: 1;
  height: 152px;
  padding: 34px 0;
  background: #fafdff;
  text-align: center;
  font-size: 16px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: inline-block;
`;

const Copyright = styled.div`
  line-height: 88px;
  float: left;
  margin-right: ${spacing()};
  opacity: 0.45;
`;

const Separator = styled.div`
  float: left;
  width: 1px;
  height: 11px;
  margin: 37px 0;
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
  font-size: 12px;
  opacity: 0.5;
  line-height: 1.5;
  margin: 0 0 ${spacing(0.25)};
  font-weight: 600;
`;

const Links = styled.div`
  ${clearFix()};
`;

const StyledLink = styled.a`
  float: left;
  margin-right: ${spacing()};
  border-bottom: 1px solid transparent;
  line-height: 1;
  font-size: 15px;
  color: ${colors.text};
  opacity: 0.4;

  &:hover {
    color: ${colors.primary};
    opacity: 1;
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
          <StyledLink href="mailto:team@blockcluster.io">About</StyledLink>
          <StyledLink href="mailto:team@blockcluster.io">Contact</StyledLink>
          <StyledLink href="mailto:team@blockcluster.io">Careers</StyledLink>
        </Links>
      </Company>
    </Wrapper>
  </Root>
);

export default Footer;
