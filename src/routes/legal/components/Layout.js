import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { colors, spacing, media } from '../../../styles';
import { title, wrapper } from '../../../styles/mixins';

const Wrapper = styled.div`
  position: relative;
  min-height: 100%;
`;

// padding-bottom footer height
const Root = styled.div`
  padding-bottom: 138px;

  ${media.max768} {
    padding-bottom: 264px;
  }
`;

const StyledWrapper = styled.div`
  ${wrapper};
  position: relative;
  padding: 0 ${spacing()};
`;

const Body = styled.div``;

const NavTitle = styled.div`
  font-size: 19px;
  font-weight: 600;
  margin-bottom: ${spacing(0.5)};
  color: ${darken(0.1, colors.text)};
`;

const NavLinkWrapper = styled.div`
  margin-bottom: ${spacing(0.25)};
`;

const NavLink = styled(props => (
  <NavLinkWrapper>
    <a {...props} />
  </NavLinkWrapper>
))`
  display: inline-block;
  color: ${lighten(0.1, colors.text)};
  border-bottom: 1px solid transparent;
  line-height: 1;

  &:hover {
    color: ${colors.link};
    border-color: ${colors.link};
  }
`;

const Sidebar = styled.div`
  ${media.max768} {
    margin-bottom: ${spacing(2)};
  }

  ${media.min768} {
    float: left;
    width: 25%;
  }
`;

const Content = styled.div`
  margin-bottom: ${spacing()};

  ${media.min768} {
    float: left;
    width: 75%;
  }
`;

export const Title = styled.h1`
  ${title};
  color: ${darken(0.1, colors.text)};
`;

export const Subtitle = styled.h2`
  font-size: 21px;
  color: ${darken(0.1, colors.text)};
`;

export const Paragraph = styled.p`
  margin-bottom: ${spacing(2)};
`;

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {};

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Root>
        <StyledWrapper>
          <Header />
          <Body>
            <Sidebar>
              <nav>
                <NavTitle>Legal</NavTitle>
                <NavLink href="/privacy">Privacy policy</NavLink>
                <NavLink href="/terms">Terms and condition</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/pricing">Pricing</NavLink>
                <NavLink href="/contact">Contact us</NavLink>
              </nav>
            </Sidebar>
            <Content>{children}</Content>
          </Body>
        </StyledWrapper>
        <Footer />
      </Root>
    </Wrapper>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;
