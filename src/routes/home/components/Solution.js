import React from 'react';
import styled from 'styled-components';
import { clearFix, lighten } from 'polished';
import { colors, spacing, media } from '../../../styles';
import { wrapper, cover, uppercase } from '../../../styles/mixins';

const Root = styled.section`
  position: relative;
  height: 720px;
  background: #fff;
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
      <Title>Introducing Blockchain as a service</Title>
      <Subtitle>
        BlockCluster’s BaaS includes a rich catalog of cloud services which
        allows you to<br />
        customly build and deploy business blockchain applications rapidly — a
        few clicks aways.
      </Subtitle>
      <Points>
        <Point>
          <PointTitle>Build & deploy in no time</PointTitle>
          <PointDescription>
            Setup your blockchain network within a few<br />
            clicks or API calls without writing any code
          </PointDescription>
        </Point>
        <Point>
          <PointTitle>No knowledge required</PointTitle>
          <PointDescription>
            Configure your digital assets through our<br />
            user interface without writing smart contracts
          </PointDescription>
        </Point>
      </Points>
      <Points>
        <Point>
          <PointTitle>Secure and reliable</PointTitle>
          <PointDescription>
            Under the hood we’re leveraging the most<br />
            reputable and well tested smart contracts
          </PointDescription>
        </Point>
        <Point>
          <PointTitle>Easy integration & scalable</PointTitle>
          <PointDescription>
            Whether hosted on the cloud or on premises,<br />
            BlockCluster’s integration is simple
          </PointDescription>
        </Point>
      </Points>
    </Wrapper>
  </Root>
);

export default Problem;
