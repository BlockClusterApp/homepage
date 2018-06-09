import React from 'react';
import ReactDOM from 'react-dom';
import { canUseDOM, canUseEventListeners } from 'fbjs/lib/ExecutionEnvironment';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Backdrop from '../Backdrop';
import { media, spacing } from '../../styles';
import { card } from '../../styles/mixins';

/* eslint-disable jsx-a11y/no-static-element-interactions, no-unused-expressions */

const backdropCss = css`
  ${'' /* ${media.max460`
    &.isActive {
      opacity: .01;
    }
  `}; */};
`;

const Wrapper = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;

  &.isActive {
    z-index: 11;
  }
`;

const Table = styled.div`
  display: table;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: ${spacing()};
  table-layout: fixed;
`;

const TableCell = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  height: 100%;
`;

const StyledModal = styled.div`
  ${card};
  margin-bottom: 0;
  opacity: 0;
  transform: matrix(0.5, 0, 0, 0.5, 0, 0);
  transition: opacity 0.35s, transform 0.35s;

  ${media.max460} {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0;
    transform: translate3d(100%, 0, 0);
    opacity: 1;
  }

  &.isPrepared {
    will-change: opacity, transform;
  }

  &.isActive {
    opacity: 1;
    transform: matrix(1, 0, 0, 1, 0, 0);

    ${media.max460} {
      transform: translate3d(0, 0, 0);
    }
  }

  &.isClosing {
    transition: opacity 0.15s ease-out, transform 0.15s ease-out;
  }

  ${props => props.modalCss && props.modalCss};
`;

const transitionDuration = {
  FADE_IN: 350,
  FADE_OUT: 700,
};

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    modalCss: PropTypes.arrayOf(PropTypes.string),
    hideCallback: PropTypes.func,
    onOutsideModalClick: PropTypes.func,
    show: PropTypes.bool,
  };

  static defaultProps = {
    modalCss: [''],
    hideCallback: null,
    onOutsideModalClick: null,
    show: false,
  };

  constructor(props) {
    super(props);

    this.isActive = false;
    this.scrollbarWidth = '0px';
  }

  state = {
    backdropShow: false,
  };

  componentDidMount() {
    if (canUseEventListeners) {
      this.scrollbarWidth = `${window.innerWidth -
        document.documentElement.clientWidth}px`;

      if (this.props.show) {
        this.show();
      }
    }
  }

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

  onOutsideModalClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onOutsideModalClick();
    }
  };

  show = callback => {
    if (this.isAnimating) {
      return;
    }

    this.isAnimating = true;
    this.setState({ backdropShow: true });
    this.modal.classList.add('isPrepared');
    this.wrapper.classList.add('isActive');
    document.documentElement.style.overflow = 'hidden';

    if (parseInt(this.scrollbarWidth, 10)) {
      document.body.style.marginRight = this.scrollbarWidth;
    }

    window.requestAnimationFrame(() => {
      this.modal.classList.add('isActive');

      this.modal.onTransitionEnd(() => {
        this.isAnimating = false;
        this.isActive = true;

        if (typeof callback === 'function') {
          callback();
        }
      }, transitionDuration.FADE_IN);
    });
  };

  hide = callback => {
    if (this.isAnimating) {
      return;
    }

    this.isAnimating = true;
    this.setState({ backdropShow: false });
    this.modal.classList.add('isClosing');
    this.modal.classList.remove('isActive');

    this.modal.onTransitionEnd(() => {
      this.modal.classList.remove('isClosing');
      this.modal.classList.remove('isPrepared');
      this.wrapper.classList.remove('isActive');
      document.documentElement.style.overflow = '';

      if (document.body.style.marginRight !== '') {
        document.body.style.marginRight = '';
      }

      this.isAnimating = false;
      this.isActive = false;

      if (typeof this.props.hideCallback === 'function') {
        this.props.hideCallback();
      }

      if (typeof callback === 'function') {
        callback();
      }
    }, transitionDuration.FADE_OUT);
  };

  render() {
    const { modalCss, children } = this.props;

    if (!canUseDOM) {
      return null;
    }

    return ReactDOM.createPortal(
      <div>
        <Backdrop
          show={this.state.backdropShow}
          onClick={this.hide}
          backdropCss={backdropCss}
        />
        <Wrapper
          innerRef={wrapper => {
            this.wrapper = wrapper;
          }}
        >
          <Table onClick={this.onOutsideModalClick}>
            <TableCell onClick={this.onOutsideModalClick}>
              <StyledModal
                innerRef={modal => {
                  this.modal = modal;
                }}
                modalCss={modalCss}
              >
                {children}
              </StyledModal>
            </TableCell>
          </Table>
        </Wrapper>
      </div>,
      document.getElementById('modal'),
    );
  }
}

export default Modal;
