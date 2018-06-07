import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { clearFix } from 'polished';
import SVG from 'react-svg-inline';
import Modal from '../../../components/Modal/Modal';
import { colors, spacing } from '../../../styles';

const modalCss = css`
  background: white;
  padding: ${spacing(1.5)};
  max-width: 480px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: ${spacing(0.5)};
`;

const Subtitle = styled.div``;

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
          Thanks for showing your interest in BlockCluster, go ahead and fill in
          your details, and we shall return to you shortly.
        </Subtitle>
        <input placeholder="user name" />
      </Modal>
    );
  }
}
