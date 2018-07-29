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
  overflow: hidden;
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

const Nav = styled.div`
  margin-bottom: ${spacing()};
`;

const NavTitle = styled.div`
  font-size: 19px;
  font-weight: 600;
  margin-bottom: ${spacing(0.5)};
  color: ${colors.secondary};
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
  position: relative;

  ${media.max768} {
    margin-bottom: ${spacing(2)};
  }

  ${media.min768} {
    float: left;
    width: 25%;
  }
`;

const SidebarBgCover = styled.div`
  position: absolute;
  z-index: -1;
  top: -98px;
  right: 32px;
  height: ${props => (props.coverHeight ? `${props.coverHeight}px` : '1000vh')};
  width: 100vh;
  background: linear-gradient(#f6fbff, #eef7fe);

  ${media.max768} {
    display: none;
  }
`;

const Content = styled.div`
  margin-bottom: ${spacing()};

  ${media.min768} {
    float: left;
    width: 75%;
    margin-bottom: ${spacing(2)};
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

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {};

  state = {
    sidebarBgHeight: null,
  };

  componentDidMount() {
    requestAnimationFrame(this.setSidebarBgHeight);

    window.addEventListener('resize', this.setSidebarBgHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setSidebarBgHeight);
  }

  setSidebarBgHeight = () => {
    this.setState({
      sidebarBgHeight: this.wrapperRef.clientHeight,
    });
  };

  render() {
    const { children } = this.props;
    const { sidebarBgHeight } = this.state;

    return (
      <Wrapper
        innerRef={ref => {
          this.wrapperRef = ref;
        }}
      >
        <Root>
          <StyledWrapper>
            <Header />
            <Body>
              <Sidebar>
                <SidebarBgCover coverHeight={sidebarBgHeight} />
                <Nav>
                  <NavTitle>Site</NavTitle>
                  <NavLink href="/media">Media</NavLink>
                  <NavLink href="/pricing">Pricing</NavLink>
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/contact">Contact us</NavLink>
                </Nav>
                <Nav>
                  <NavTitle>Legal</NavTitle>
                  <NavLink href="/privacy">Privacy policy</NavLink>
                  <NavLink href="/terms">Terms and condition</NavLink>
                </Nav>
                <Nav>
                  <NavTitle>Misc</NavTitle>
                  <NavLink href="/rsvp">RSVP</NavLink>
                </Nav>
              </Sidebar>
              <Content>{children}</Content>
            </Body>
          </StyledWrapper>
          <Footer />
        </Root>
      </Wrapper>
    );
  }
}
