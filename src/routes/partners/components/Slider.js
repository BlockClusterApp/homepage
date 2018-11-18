import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { colors, uppercase, media } from '../../../styles';
import { clearFix } from 'polished';
import boh_white from '../assets/boh.svg';
import eleven01_white from '../assets/eleve.svg';
import infotech_white from '../assets/infotech.svg';
import mega_white from '../assets/mega.svg';
import snapper_white from '../assets/snapper.svg';

import tm from '../assets/tm.png';
import bdb from '../assets/bigchainDB.png';
import ith from '../assets/ith.png';
import mc from '../assets/mc.png';
import era from '../assets/era.png';
import boh from '../assets/boh.png';
import sc from '../assets/sc.png';
import eleven01 from '../assets/eleven01.png';
import snapper from '../assets/snapper.png';
import hustle from '../assets/hustle.png';
import microsoft from '../assets/microsoft.png';

const Root = styled.section`
  height: 100%;
`;
const SliderHeading = styled.h1`
  font-size: 34px;
  font-weight: 700;
  color: #039ee0;
  margin-top: 250px;
  text-align: center;
  ${media.max768} {
    font-size: 27px;
    margin-top: 60px;
  }
`;

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  z-index: -2;
  background: #f6fbff;
  transform: matrix(1, 0.06, 0, 1, 0, -1);

  ${media.max768} {
    margin-top: 200px;
    margin-bottom: 100px;
  }
`;

const Wrap = styled.section`
  width: 820px;
  background: #fff;
  height: 350px;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 64px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(51, 72, 97, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  ${clearFix()};
  ${media.max980} {
    width: 640px;
    height: 270px;
  }
  ${media.max768} {
    height: auto;
    margin-bottom: 40px;
  }
  ${media.max700} {
    width: 420px;
  }
  ${media.max460} {
    width: 320px;
  }
  ${media.max375} {
    width: 280px;
  }
`;

const WrapLogos = styled.section`
  width: 820px;
  background: transparent;
  margin: 0 auto;
  border-radius: 10px;
  margin-bottom: 140px;
  overflow: hidden;
  ${clearFix()};
  ${media.max980} {
    width: 640px;
    height: 270px;
  }
  ${media.max768} {
    height: auto;
    margin-bottom: 80px;
  }
  ${media.max700} {
    width: 420px;
  }
  ${media.max460} {
    width: 320px;
  }
  ${media.max375} {
    width: 280px;
  }
`;

const Arrows = styled.section`
  top: -196px;
  position: relative;
  width: 868px;
  background: transparent;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  ${clearFix()};
  height: 44px;
  ${media.max980} {
    width: 688px;
    top: -150px;
  }
  ${media.max768} {
    top: -258px;
  }

  ${media.max700} {
    width: 468px;
    top: -304px;
  }

  ${media.max460} {
    width: 368px;
    top: -354px;
  }
  ${media.max375} {
    width: 328px;
    top: -378px;
  }
`;

const LogoWrapper = styled.div`
  width: 40%;
  display: inline-block;
  height: 100%;
  float: left;
  position: relative;
  z-index: 3;

  ${media.max768} {
    display: block;
    width: 100%;
    float: none;
    background: ${colors.secondary};
    padding: 30px;
  }
`;

const LogoCover = styled.div`
  position: absolute;
  background: ${colors.secondary};
  transform: matrix(1.1, 0, -0.4, 1, -50, 0);
  height: 100%;
  width: 100%;
  z-index: -1;

  ${media.max768} {
    display: none;
  }
`;

const LogoCoverHeader = styled.div`
  padding: 25px;
  background: ${colors.primary};
  ${media.max768} {
    display: none;
  }
`;

const TextWrapper = styled.div`
  width: 60%;
  display: inline-block;
  padding: 80px;
  height: 100%;
  text-align: left;
  float: left;
  transition: all 0.4s;

  ${media.max980} {
    padding: 40px;
  }
  ${media.max768} {
    display: block;
    width: 100%;
    float: none;
    padding: 30px;
  }
`;

const ContentLogo = styled.img`
  width: 55%;
  position: absolute;
  left: 15%;
  top: 26%;
  opacity: ${props => props.opacity};
  transition: all 0.4s;

  ${media.max768} {
    position: static;
    margin-left: auto;
    margin-right: auto;
    display: inherit;
    width: 120px;
  }
`;

const Quote = styled.q`
  font-style: italic;
  opacity: ${props => props.opacity};
  transition: all 0.4s;
`;

const PersonName = styled.div`
  ${uppercase} margin-top: 20px;
  font-weiight: bold;
  opacity: ${props => props.opacity};
  transition: all 0.4s;
`;

const PersonDesignation = styled.p`
  opacity: ${props => props.opacity};
  transition: all 0.4s;
`;

const LogoList = styled.div`
  display: block;
  text-align: center;
`;

const Logo = styled.img`
  height: 40px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 28px;

  ${media.max700} {
    height: 20px;
    margin-left: 8px;
    margin-right: 8px;
  }
`;

const LeftArrow = styled.div`
  position: absolute;
  width: 40px;
  border-radius: 25px;
  background: #fff;
  z-index: 4;
  height: 40px;
  box-shadow: 0 0 0 2px rgb(233, 241, 246);
  top: 2px;
  left: 4px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s;

  &:hover:not([disabled]) {
    left: 2px;
  }
`;

const RightArrow = styled.div`
  position: absolute;
  width: 40px;
  border-radius: 25px;
  background: #fff;
  z-index: 4;
  height: 40px;
  box-shadow: 0 0 0 2px rgb(233, 241, 246);
  top: 2px;
  right: 4px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s;

  &:hover:not([disabled]) {
    right: 2px;
  }
`;

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      opacity: '1',
      content: [
        {
          logo: infotech_white,
          text: `
                Partnering with BlockCluster has greatly accelerated the blockchain solutions
                Infotech Hub can offer our clients and has deepened our capabilities through
                BlockCluster Partner Specializations including Cloud and Serverless.`,
          name: `Manisha Dubey`,
          designation: `Director, ITH Technologies`,
        },
        {
          logo: mega_white,
          text: `This wasn't just a product shift for us,
                 it was also a business shift. As a partner we were able to
                 consult our client better and achieve better conversion ratio. We are more
                 confident in running our services with BlockCluster as a partner.`,
          name: `K. Sive`,
          designation: `CEO, Megachain`,
        },
      ],
    };

    this.goPrev = this.goPrev.bind(this);
    this.goNext = this.goNext.bind(this);
  }

  goPrev() {
    if (this.state.current === 0) {
      this.setState(
        {
          opacity: '0',
        },
        () => {
          setTimeout(() => {
            this.setState({
              current: this.state.content.length - 1,
              opacity: '1',
            });
          }, 500);
        },
      );
    } else {
      this.setState(
        {
          opacity: '0',
        },
        () => {
          setTimeout(() => {
            this.setState({
              current: this.state.current - 1,
              opacity: '1',
            });
          }, 500);
        },
      );
    }
  }

  goNext() {
    console.log(this.state.current, this.state.content.length - 1);
    if (this.state.current === this.state.content.length - 1) {
      this.setState(
        {
          opacity: '0',
        },
        () => {
          setTimeout(() => {
            this.setState({
              current: 0,
              opacity: '1',
            });
          }, 500);
        },
      );
    } else {
      this.setState(
        {
          opacity: '0',
        },
        () => {
          setTimeout(() => {
            this.setState({
              current: this.state.current + 1,
              opacity: '1',
            });
          }, 500);
        },
      );
    }
  }

  render() {
    return (
      <Root>
        <Bg />
        <SliderHeading>
          Partner Success
          <span style={{ color: '#025faa' }}> Stories</span>
        </SliderHeading>
        <Wrap>
          <LogoWrapper>
            <LogoCover>
              <LogoCoverHeader />
            </LogoCover>
            <ContentLogo
              opacity={this.state.opacity}
              src={this.state.content[this.state.current].logo}
            />
          </LogoWrapper>
          <TextWrapper>
            <Quote opacity={this.state.opacity}>
              &nbsp;{this.state.content[this.state.current].text}&nbsp;
            </Quote>
            <PersonName opacity={this.state.opacity}>
              {this.state.content[this.state.current].name}
            </PersonName>
            <PersonDesignation opacity={this.state.opacity}>
              {this.state.content[this.state.current].designation}
            </PersonDesignation>
          </TextWrapper>
        </Wrap>
        <Arrows>
          <LeftArrow onClick={this.goPrev}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ position: 'relative', top: '3px' }}
            />
          </LeftArrow>
          <RightArrow onClick={this.goNext}>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ position: 'relative', top: '3px' }}
            />
          </RightArrow>
        </Arrows>
        <WrapLogos>
          <LogoList>
            <Logo src={microsoft} />
            <Logo src={ith} />
            <Logo src={mc} />
            <Logo src={era} />
            <Logo src={boh} />
            <Logo src={eleven01} />
            <Logo src={snapper} />
            <Logo src={hustle} />
          </LogoList>
        </WrapLogos>
      </Root>
    );
  }
}

export default Slider;
