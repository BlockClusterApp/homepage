import React from 'react';
import styled from 'styled-components';
import AnimateText from '../../../components/AnimateText';
import { colors, spacing } from '../../../styles';

const Root = styled.section`
  background: ${colors.secondary};
  padding: ${spacing(7)} 0;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 34px;
  font-weight: 600;
  color: #fff;
  margin-bottom: ${spacing(1.5)};
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
`;

const Features = () => (
  <Root>
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
