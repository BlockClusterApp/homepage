import React from 'react';
import styled from 'styled-components';
import AnimateText from '../../../components/AnimateText';
import { colors, spacing, media, cover } from '../../../styles';

const Root = styled.section`
  position: relative;
  z-index: 3;
  padding: ${spacing(7)} 0;
  text-align: center;

  ${media.max768} {
    padding: ${spacing(2.5)} ${spacing(1.5)};
  }

  ${media.max375} {
    padding: ${spacing(2.5)} ${spacing()};
  }
`;

const Cover = styled.div`
  ${cover};
  z-index: -1;
  height: 110%;
  background: ${colors.secondary};
  transform: matrix(1, -0.04, 0, 1, 0, -22);

  ${media.max768} {
    transform: matrix(1, -0.04, 0, 1, 0, -12);
  }
`;

const Title = styled.h3`
  font-size: 34px;
  font-weight: 600;
  color: #fff;
  margin-bottom: ${spacing(1.5)};

  ${media.max768} {
    font-size: 30px;
    margin-bottom: ${spacing()};
  }

  ${media.max375} {
    font-size: 25px;
    margin-bottom: ${spacing()};
  }
`;

const TitleEm = styled.span`
  font-weight: 600;
  color: ${colors.backgroundSecondaryText};
`;

const Subtitle = styled.h3`
  font-size: 18px;
  line-height: 1.4;
  font-weight: 600;
  max-width: 378px;
  margin: 0 auto;
  color: #fff;
  opacity: 0.9;

  ${media.max768} {
    font-size: 17px;
  }
`;

const Features = () => (
  <Root>
    <Cover />
    <Title>
      <AnimateText
        textNodes={['Blockchain', <TitleEm>automagically</TitleEm>]}
        animationStyle="slide"
      />
    </Title>
    <Subtitle>
      <AnimateText
        textNodes={[
          `BlockCluster automatically sets up your nodes, writes your smart contracts and auto generates your API endpoints.`,
        ]}
        animationStyle="fadeSlide"
      />
    </Subtitle>
  </Root>
);

export default Features;
