import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { mix, clearFix, lighten, darken, shade } from 'polished';
import Modal from '../../../components/Modal/Modal';
import { colors, spacing, uppercase } from '../../../styles';

const modalCss = css`
  background: white;
  padding: ${spacing(1.5)} ${spacing(2)} ${spacing(2)};
  max-width: 624px;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: ${spacing(0.25)};
  color: ${darken(0.1, colors.text)};
`;

const Subtitle = styled.div`
  color: ${lighten(0.1, colors.text)};
  margin-bottom: ${spacing(1.5)};
`;

const Row = styled.div`
  ${clearFix()};
  margin-bottom: ${spacing(0.5)};

  &:last-child {
    margin-top: ${spacing()};
    margin-bottom: 0;
  }
`;

const Column = styled.div`
  float: left;

  &:first-child {
    width: 32%;
  }

  &:last-child {
    width: 68%;
  }
`;

const Label = styled.label`
  font-size: 17px;
  font-weight: 600;
  line-height: 38px;
  color: ${mix(0.7, colors.text, colors.primary)};
`;

const Input = styled.input`
  width: 100%;
  font-size: 17px;
  background: #eef5fb;
  border: 1px solid #eef5fb;
  border-radius: 3px;
  padding: 8px 16px;
  transition: all 0.3s;

  &::-webkit-input-placeholder {
    color: ${lighten(0.3, mix(0.8, colors.text, colors.primary))};
  }

  &:-moz-placeholder {
    color: ${lighten(0.3, mix(0.8, colors.text, colors.primary))};
  }

  &::-moz-placeholder {
    color: ${lighten(0.3, mix(0.8, colors.text, colors.primary))};
  }

  &:-ms-input-placeholder {
    color: ${lighten(0.3, mix(0.8, colors.text, colors.primary))};
  }

  &:hover {
    background: #f6fbff;
    border-color: ${shade(0.95, '#eef5fb')};
  }

  &:focus {
    background: #fff;
    border-color: ${colors.primary};
  }
`;

const Textarea = Input.withComponent('textarea').extend`
  min-height: ${spacing(6)};
`;

const Button = styled.a`
  ${uppercase};
  display: block;
  text-align: center;
  position: relative;
  z-index: 2;
  font-size: 14px;
  float: right;
  margin-right: ${spacing()};
  width: 210px;
  height: 44px;
  line-height: 44px;
  border-radius: 5px;
  box-shadow: 0 7px 14px rgba(51, 72, 97, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  transition: all 0.2s;

  &:last-child {
    margin-right: 0;
  }

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

// Users name, Current title, which company they are working with in what sector
// and what is the size of the company, also if there is a budget for Blockchain
// services, if he or she influences that budget (this one is debatable). There
// company email id and phone number (this can be optional).

// Let’s make corporate email sign ups, so that in future
// if we go Dapps route, this saves energy in campaigning"

export default class ModalRequestDemo extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onOutsideModalClick={this.props.onOutsideModalClick}
        modalCss={modalCss}
      >
        <Title>Request a demo</Title>
        <Subtitle>
          Thanks for showing your interest in BlockCluster!<br />
          Go ahead and fill in your details, and we’ll get back to you.
        </Subtitle>
        <Row>
          <Column>
            <Label>Full name</Label>
          </Column>
          <Column>
            <Input placeholder="John Doe" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Work email</Label>
          </Column>
          <Column>
            <Input placeholder="john.doe@company.com" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Your job title</Label>
          </Column>
          <Column>
            <Input placeholder="CEO" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Company sector</Label>
          </Column>
          <Column>
            <Input placeholder="Agriculture" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Company size</Label>
          </Column>
          <Column>
            <Input placeholder="50-100 employees" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Anything else?</Label>
          </Column>
          <Column>
            <Textarea placeholder="Tell us more about your project, needs, and timeline" />
          </Column>
        </Row>
        <Row>
          <Button secondary>Request demo</Button>
        </Row>
      </Modal>
    );
  }
}
