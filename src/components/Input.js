import { Field } from 'formik';
import styled from 'styled-components';
import { mix, shade, lighten } from 'polished';
import { spacing, colors } from '../styles';

const Input = styled(Field)`
  width: 100%;
  font-size: 17px;
  background: #eef5fb;
  border: 1px solid #eef5fb;
  border-radius: 3px;
  padding: 8px 16px;
  transition: all 0.3s;
  color: ${colors.text};

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

export const Textarea = Input.withComponent('textarea').extend`
  min-height: ${spacing(6)};
`;

export const InputError = styled.div`
  font-size: 14px;
  color: ${colors.error};
  color: #ff4775;
`;

export default Input;
