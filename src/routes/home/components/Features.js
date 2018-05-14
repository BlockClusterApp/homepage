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

const Features = () => (
  <Root>
    <Wrapper>
      <Title>Let’s get technical</Title>
      <Subtitle>
        BlockCluster automatically sets up your nodes, writes your smart
        contracts and<br />
        auto generates API endpoints providing you full control over your
        private chain.
      </Subtitle>
      <Points>
        <Point>
          <PointTitle>Run anywhere</PointTitle>
          <PointDescription>
            Take the advantage to run your infrastructure<br />
            anywhere, on-premises, hybrid, or the cloud.
          </PointDescription>
        </Point>
        <Point>
          <PointTitle>Cross chain assets</PointTitle>
          <PointDescription>
            Interoperable assets means you are able to<br />
            distribute your assets across different networks
          </PointDescription>
        </Point>
        <Point>
          <PointTitle>Auto generated API’s</PointTitle>
          <PointDescription>
            Use familiar REST API’s to interact with the<br />
            blockchain. Blockchain made easy.
          </PointDescription>
        </Point>
      </Points>
      <Points>
        <Point>
          <PointTitle>Digitalization of assets</PointTitle>
          <PointDescription>
            This process eliminates much of the friction involved<br />
            of holding, storing, and transferring a asset.
          </PointDescription>
        </Point>
        <Point>
          <PointTitle>Advanced querying</PointTitle>
          <PointDescription>
            Query smart contracts and assets using<br />
            the MongoDB query language style
          </PointDescription>
        </Point>
        <Point>
          <PointTitle>Audited smart contracts</PointTitle>
          <PointDescription>
            Verified smart contracts which went through<br />
            rigorous independent reviews.
          </PointDescription>
        </Point>
      </Points>
    </Wrapper>
  </Root>
);

export default Features;
