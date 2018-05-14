import React from 'react';
import styled from 'styled-components';
import { clearFix, lighten } from 'polished';
import { colors, spacing, media } from '../../../styles';
import { wrapper, cover, uppercase } from '../../../styles/mixins';

const Root = styled.section`
  position: relative;
  background: #f6fbff;
  padding: ${spacing(7)} ${spacing()};
`;

const Wrapper = styled.div`
  ${wrapper};
`;

const Title = styled.h3`
  font-size: 26px;
  font-weight: 700;
  color: #000;
`;

const Subtitle = styled.h3`
  font-size: 17px;
  font-weight: 400;
  margin-bottom: ${spacing(4)};
`;

const Points = styled.div`
  ${clearFix()};
  margin-bottom: ${spacing(3)};
`;

const Point = styled.div`
  float: left;
  width: 320px;
`;

const PointTitle = styled.div`
  ${uppercase};
  font-size: 14px;
  font-weight: 700;
  color: #000;
  margin-bottom: ${spacing(0.5)};
`;

const PointDescription = styled.div`
  color: ${lighten(0.1, colors.text)};
  line-height: 1.3;
`;

const Problem = () => (
  <Root>
    <Wrapper>
      <Title>Building your own private blockchain is difficult</Title>
      <Subtitle>
        Blockchain and its promising technology could provide immense of value
        to your business.<br />What you’ll probably realise sooner than later is
        that it’s not that easy to implement.
      </Subtitle>
      <Points>
        <Point>
          <PointTitle>Slow development</PointTitle>
          <PointDescription>
            Writing dedicated blockchain applications<br />
            is expected to take months to develop
          </PointDescription>
        </Point>
        <Point>
          <PointTitle>Error prone</PointTitle>
          <PointDescription>
            Smart contract are prone to human error<br />
            which will risk your business integrity
          </PointDescription>
        </Point>
      </Points>
      <Points>
        <Point>
          <PointTitle>Hard to execute</PointTitle>
          <PointDescription>
            Blockchain is relatively new and finding<br />
            experienced developers is hard
          </PointDescription>
        </Point>
        <Point>
          <PointTitle>Cumbersome integration</PointTitle>
          <PointDescription>
            Existing systems introduce more hassles,<br />
            especially with an on-premises setup
          </PointDescription>
        </Point>
      </Points>
    </Wrapper>
  </Root>
);

export default Problem;
