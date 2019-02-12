import React from 'react';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import styled, { css } from 'styled-components';
import { clearFix, mix, shade } from 'polished';
import AnimateText from '../../../components/AnimateText';
import { colors, spacing, uppercase, media } from '../../../styles';
import { wrapper } from '../../../styles/mixins';
import mq from '../../../helpers/mediaQueries';

const Root = styled.section`
  position: relative;
  height: 456px;
  background: #f6fbff;
  margin-top: -100px;
  padding-top: 100px;

  ${media.max980} {
    height: auto;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  ${wrapper};
  position: relative;
  padding: 142px ${spacing(1.5)};

  ${media.max980} {
    padding: ${spacing(4.25)} ${spacing(1.5)} ${spacing(2.5)};
  }

  ${media.max375} {
    padding: ${spacing(4.25)} ${spacing()} ${spacing(2.5)};
  }
`;

const Title = styled.h3`
  font-size: 34px;
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: ${spacing(0.25)};

  ${media.max768} {
    font-size: 30px;
  }

  ${media.max375} {
    font-size: 27px;
  }
`;

const TitleEm = styled.span`
  font-weight: 700;
  color: ${colors.secondary};
`;

const Subtitle = styled.h3`
  font-size: 21px;
  font-weight: 600;
  margin-bottom: ${spacing(6)};
  opacity: 0.8;

  ${media.max980} {
    font-size: 17px;
    margin-bottom: ${spacing(2)};
  }
`;

const TextWrapper = styled.div`
  ${media.min980} {
    float: left;
  }
`;

const Button = styled.a`
  ${uppercase};
  display: block;
  text-align: center;
  position: relative;
  z-index: 2;
  font-size: 14px;
  float: left;
  margin-right: ${spacing()};
  width: 210px;
  height: 44px;
  line-height: 44px;
  border-radius: 5px;
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  transition: none;

  ${media.max980} {
    width: 160px;
  }

  ${media.max374} {
    float: none;
    margin: 0 auto ${spacing()};
  }

  &:hover {
    transition: all 0.2s !important;
  }

  &:last-child {
    margin-right: 0;
  }

  ${props =>
    props.primary &&
    css`
      background: #fff;
      color: ${colors.secondary};

      &:hover {
        background: ${shade(0.98, mix(0.3, '#fff', '#f6fbff'))};
      }
    `};

  ${props =>
    props.secondary &&
    css`
      background: ${colors.primary};
      color: #fff;

      &:hover {
        background: ${mix(0.6, colors.primary, colors.backgroundSecondaryText)};
      }
    `};
`;

const ButtonsWrapper = styled.div`
  ${clearFix()};

  ${media.max980} {
    display: inline-block;
  }

  ${media.min980} {
    padding-top: 14px;
    float: right;
  }

  ${props =>
    props.mounted &&
    css`
      ${Button} {
        opacity: 0;
      }
    `};

  ${props =>
    props.visible &&
    css`
      ${Button} {
        opacity: 1;
        transition: opacity 1.4s;
        transition-delay: 0.5s;

        &:last-child {
          transition-delay: 0.75s;
        }
      }
    `};
`;

class Contact extends React.Component {
  state = {
    visible: false,
    mounted: false,
  };

  componentDidMount() {
    if (canUseDOM && mq.min768()) {
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
        this.buttonsWrapperRef.current.getBoundingClientRect().top
    ) {
      this.setState({ visible: true });
    }

    if (
      this.state.visible &&
      window.innerHeight <
        this.buttonsWrapperRef.current.getBoundingClientRect().top
    ) {
      this.setState({ visible: false });
    }
  };

  buttonsWrapperRef = React.createRef();

  render() {
    const { mounted, visible } = this.state;

    return (
      <Root>
        <Wrapper>
          <TextWrapper>
            <Title>
              <AnimateText
                textNodes={[
                  'Ready',
                  'to',
                  'use',
                  <TitleEm>BlockCluster?</TitleEm>,
                ]}
                animationStyle="slide"
              />
            </Title>
            <Subtitle>
              <AnimateText
                textNodes={[`Get started with a free demo for your business.`]}
                animationStyle="fadeSlide"
              />
            </Subtitle>
          </TextWrapper>
          <ButtonsWrapper
            innerRef={this.buttonsWrapperRef}
            mounted={mounted}
            visible={visible}
          >
            <Button primary href="https://docs.blockcluster.io/">
              Documentation
            </Button>
            <Button secondary href="/request-demo">
              Request demo
            </Button>
          </ButtonsWrapper>
        </Wrapper>
      </Root>
    );
  }
}

export default Contact;
