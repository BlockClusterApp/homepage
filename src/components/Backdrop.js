import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../styles';

/* eslint-disable jsx-a11y/no-static-element-interactions */

const Root = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0;
  transition: opacity 0.45s;
  pointer-events: none;

  &.isPrepared {
    z-index: 10;
    will-change: opacity;
  }

  &.isActive {
    opacity: 0.4;
    pointer-events: initial;
  }

  &.isClosing {
    transition: opacity 0.7s ease-out;
  }

  ${props => props.backdropCss && props.backdropCss};
`;

const transitionDuration = {
  FADE_IN: 450,
  FADE_OUT: 700,
};

class Backdrop extends React.Component {
  static propTypes = {
    show: PropTypes.bool,
    onClick: PropTypes.func,
    backdropRef: PropTypes.func,
    backdropCss: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    show: false,
    onClick: null,
    backdropRef: null,
    backdropCss: [''],
  };

  state = {
    classList: [],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.show === this.props.show) {
      return;
    }

    if (this.props.show) {
      this.show();
    } else {
      this.hide();
    }
  }

  show = () => {
    this.setState({ classList: [...this.state.classList, 'isPrepared'] });

    window.requestAnimationFrame(() => {
      this.setState({ classList: [...this.state.classList, 'isActive'] });
    });
  };

  hide = () => {
    this.setState({
      classList: [
        ...this.state.classList.filter(className => className !== 'isActive'),
        'isClosing',
      ],
    });

    this.backdrop.onTransitionEnd(() => {
      this.setState({ classList: [] });
    }, transitionDuration.FADE_OUT);
  };

  render() {
    const { onClick, backdropRef, backdropCss } = this.props;

    const { classList } = this.state;

    return (
      <Root
        className={classList.join(' ')}
        innerRef={backdrop => {
          if (backdropRef) {
            backdropRef(backdrop);
          }
          this.backdrop = backdrop;
        }}
        onClick={onClick}
        backdropCss={backdropCss}
      />
    );
  }
}

export default Backdrop;
