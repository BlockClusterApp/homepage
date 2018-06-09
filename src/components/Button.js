import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { colors, spacing, uppercase } from '../styles';

const Button = styled.button`
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
  box-shadow: inset 0 1px 0px rgba(255, 255, 255, 0.16),
    0 1px 8px rgba(0, 0, 0, 0.2), 0 4px 24px rgba(0, 0, 0, 0);
  transition: all 0.2s;

  &:last-child {
    margin-right: 0;
  }

  &:hover:not([disabled]) {
    transform: matrix(1, 0, 0, 1, 0, -1);
    box-shadow: inset 0 1px 0px rgba(255, 255, 255, 0.16),
      0 10px 16px -10px rgba(0, 0, 0, 0.4), 0 5px 24px rgba(0, 0, 0, 0.1);
  }

  &:active:not([disabled]) {
    transform: matrix(1, 0, 0, 1, 0, 1);
    box-shadow: inset 0 -1px 0px rgba(0, 0, 0, 0.16),
      0 -1px 8px rgba(0, 0, 0, 0.2), 0 3px 24px rgba(0, 0, 0, 0);

    &,
    &:before,
    &:after {
      transition-duration: 0.05s;
    }
  }

  &:disabled {
    box-shadow: none;
    background: #bfccd4;
  }

  ${props =>
    props.primary &&
    css`
      background: rgba(255, 255, 255, 0.9);
      color: ${colors.secondary};
      color: #026fbb;

      &:hover:not([disabled]) {
        background: #fff;
      }

      &:active:not([disabled]) {
        background: rgba(255, 255, 255, 0.8);
      }
    `};

  ${props =>
    props.secondary &&
    css`
      background: ${colors.primary};
      background: #03b0e9;
      color: #fff;

      &:hover:not([disabled]) {
        background: ${lighten(0.05, '#03b0e9')};
      }

      &:active:not([disabled]) {
        background: ${darken(0.05, '#03b0e9')};
      }
    `};
`;

export default Button;
