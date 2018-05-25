import React from 'react';
import PropTypes from 'prop-types';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import styled, { css } from 'styled-components';
import { clearFix } from 'polished';
import { media } from '../styles';
import mq from '../helpers/mediaQueries';

const TextPartInner = styled.span`
  ${media.min460} {
    float: left;
    overflow: hidden;
    transition: none;
  }
`;

const TextPart = styled.span`
  ${media.max460} {
    display: inline-block;
  }

  ${media.min460} {
    float: left;
    overflow: hidden;

    ${[...Array(20)].map(
      (_, i) => css`
        &:nth-child(${i + 1}) {
          ${TextPartInner} {
            transition-delay: ${(i + 1) * 75}ms;
          }
        }
      `,
    )};
  }
`;

const Root = styled.span`
  display: inline-block;
  ${clearFix()};

  ${media.min460} {
    ${props =>
      props.animationStyle === 'slide' &&
      props.mounted &&
      css`
        ${TextPartInner} {
          transform: translate3d(0, 100%, 0);
        }
      `};

    ${props =>
      props.animationStyle === 'slide' &&
      props.visible &&
      css`
        ${TextPartInner} {
          transform: translate3d(0, 0, 0);
          transition: transform 0.7s;
        }
      `};

    ${props =>
      props.animationStyle === 'fadeSlide' &&
      props.mounted &&
      css`
        ${TextPartInner} {
          opacity: 0;
          transform: translate3d(0, 100%, 0);
        }
      `};

    ${props =>
      props.animationStyle === 'fadeSlide' &&
      props.visible &&
      css`
        ${TextPartInner} {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: transform 0.7s, opacity 1.4s;
        }
      `};
  }
`;

const propTypes = {
  textNodes: PropTypes.arrayOf(PropTypes.node),
  animationStyle: PropTypes.oneOf(['slide', 'fadeSlide']),
};

const defaultProps = {
  textNodes: [],
  animationStyle: 'fadeSlide',
};

export default class AnimateText extends React.Component {
  state = {
    visible: false,
  };

  componentDidMount() {
    if (canUseDOM && mq.min460()) {
      // eslint-disable-next-line
      this.setState({ mounted: true });
      window.addEventListener('scroll', this.onScrollFade);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollFade);
  }

  onScrollFade = () => {
    if (
      !this.state.visible &&
      window.innerHeight * 0.8 >
        this.rootRef.current.getBoundingClientRect().top
    ) {
      this.setState({ visible: true });
    }

    if (
      this.state.visible &&
      window.innerHeight < this.rootRef.current.getBoundingClientRect().top
    ) {
      this.setState({ visible: false });
    }
  };

  rootRef = React.createRef();

  render() {
    /* eslint-disable react/no-array-index-key */
    const { textNodes, animationStyle } = this.props;
    const { mounted, visible } = this.state;

    return (
      <Root
        innerRef={this.rootRef}
        mounted={mounted}
        visible={visible}
        animationStyle={animationStyle}
      >
        {textNodes.map((node, index) => (
          <TextPart key={index}>
            <TextPartInner>
              {node}
              {index < textNodes.length - 1 && (
                <React.Fragment>&nbsp;</React.Fragment>
              )}
            </TextPartInner>
          </TextPart>
        ))}
      </Root>
    );
  }
}

AnimateText.propTypes = propTypes;
AnimateText.defaultProps = defaultProps;
