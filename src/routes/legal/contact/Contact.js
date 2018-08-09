import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import styled, { css } from 'styled-components';
import { clearFix, mix } from 'polished';
import { colors, spacing, media } from '../../../styles';
import { wrapper, cover, card } from '../../../styles/mixins';
import uppercaseFirstChar from '../../../helpers/uppercaseFirstChar';
import Dropdown from '../../../components/Dropdown';
import Input, { InputError, Textarea } from '../../../components/Input';
import Button from '../../../components/Button';
import Header from '../../home/components/Header';
import Footer from '../../../components/Footer';
import { LABELS } from './constants';

const Row = styled.div`
  ${clearFix()};
  max-width: 420px;
  margin-bottom: ${spacing(0.5)};
  text-align: left;

  &:last-child {
    margin-top: ${spacing()};
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  font-weight: 600;
  color: ${colors.secondary};
`;

const Paragraph = styled.p`
  font-size: 16px;
  max-width: 420px;
`;

const Column = styled.div`
  width: 100%;

  @media (min-width: 641px) {
    float: left;

    &:first-child {
      width: 42%;
    }

    &:last-child {
      width: 58%;
    }
  }
`;

const Label = styled.label`
  font-size: 17px;
  font-weight: 600;
  line-height: 1.3;
  padding-top: 6px;
  color: ${mix(0.7, colors.text, colors.primary)};
`;

const CheckboxInput = styled.input.attrs({
  type: 'checkbox',
})`
  width: auto;
  position: relative;
  top: -1px;
`;

const CheckboxLabel = styled.label`
  color: ${colors.text};
  margin-right: ${spacing(1.5)};
  padding: 6px ${spacing(0.5)} 0;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.3;
  color: ${mix(0.7, colors.text, colors.primary)};
`;

const SubmitButton = Button.extend`
  width: 100%;
`;

function Checkbox(props) {
  /* eslint-disable react/prop-types */
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <div>
          <CheckboxInput
            type="checkbox"
            id={props.value}
            {...props}
            checked={
              field.value[props.name] &&
              field.value[props.name].includes(props.value)
            }
            onChange={() => {
              if (Object.keys(field.value).includes(props.name)) {
                const nextValue = field.value[props.name].filter(
                  value => value !== props.value,
                );
                let reasons = form.values[props.name];
                if (!form.values[props.name]) {
                  reasons = [];
                }

                if (!reasons.includes(nextValue)) {
                  reasons.push(nextValue);
                }
                form.setFieldValue(props.name, reasons);
              } else {
                const nextValue = field.value.concat(props.value);
                let reasons = form.values[props.name];
                if (!form.values[props.name]) {
                  reasons = [];
                }
                if (!reasons.includes(nextValue)) {
                  reasons.push(nextValue);
                }
                form.setFieldValue(props.name, reasons);
              }
            }}
          />
          <CheckboxLabel htmlFor={props.value}>{props.value}</CheckboxLabel>
        </div>
      )}
    </Field>
  );
}

export default class Contact extends React.Component {
  state = {
    form: {
      success: false,
    },
  };

  render() {
    const { form } = this.state;
    return (
      <Fragment>
        {form.success ? (
          <Fragment>
            <Title>Thank you!</Title>
            <Paragraph>
              We’ll get back to you as soon as possible at {form.email}
            </Paragraph>
          </Fragment>
        ) : (
          <Fragment>
            <Title>Contact</Title>
            <Paragraph>
              We respond to your messages in the order that they are received,
              and will respond to your inquiry as soon as possible.
            </Paragraph>
            <Formik
              initialValues={{
                name: '',
                email: '',
                phone: '',
                reason: '',
                message: '',
              }}
              validationSchema={yup.object().shape({
                name: yup.string().required(),
                email: yup
                  .string()
                  .email()
                  .required(),
                phone: yup.string(),
                reason: yup.array().required(),
                message: yup.string().required(),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                console.log(values);
                await axios
                  .post('/emails/contact', values)
                  .then(() =>
                    this.setState({
                      form: {
                        success: true,
                        email: values.email,
                      },
                    }),
                  )
                  .catch(e => {
                    // reportError(e);
                    setSubmitting(false);
                    this.setState({
                      form: {
                        success: true,
                        email: values.email,
                        error: 'Couldn’t submit the form',
                      },
                    });
                  });
              }}
              render={({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting,
              }) => (
                <Form>
                  <Row>
                    <Label htmlFor="name">{LABELS.name} *</Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                    {errors &&
                      errors.name &&
                      touched.name && (
                        <InputError>
                          {uppercaseFirstChar(errors.name)}
                        </InputError>
                      )}
                  </Row>
                  <Row>
                    <Label htmlFor="email">{LABELS.email} *</Label>
                    <Input
                      type="text"
                      name="email"
                      id="email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="john.doe@company.com"
                    />
                    {errors &&
                      errors.email &&
                      touched.email && (
                        <InputError>
                          {uppercaseFirstChar(errors.email)}
                        </InputError>
                      )}
                  </Row>
                  <Row>
                    <Label htmlFor="phone">{LABELS.phone}</Label>
                    <Input
                      type="text"
                      name="phone"
                      id="phone"
                      value={values.phone}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="+91 123 456 7890"
                    />
                    {errors &&
                      errors.phone &&
                      touched.phone && (
                        <InputError>
                          {uppercaseFirstChar(errors.phone)}
                        </InputError>
                      )}
                  </Row>
                  <Row>
                    <Label>{LABELS.reason} *</Label>
                    <Checkbox name="reason" value="Interested in investing" />
                    <Checkbox name="reason" value="Interested in partnership" />
                    <Checkbox
                      name="reason"
                      value="Question about the service"
                    />
                    <Checkbox
                      name="reason"
                      value="I want to know more about Blockchain"
                    />
                    <Checkbox name="reason" value="Other" />
                    {errors &&
                      errors.reason &&
                      touched.reason && (
                        <InputError>
                          {uppercaseFirstChar(errors.reason)}
                        </InputError>
                      )}
                  </Row>
                  <Row>
                    <Label htmlFor="message">{LABELS.message} *</Label>
                    <Textarea
                      name="message"
                      id="message"
                      value={values.message}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="I have a question about ..."
                    />
                    {errors &&
                      errors.message &&
                      touched.message && (
                        <InputError>
                          {uppercaseFirstChar(errors.message)}
                        </InputError>
                      )}
                  </Row>
                  <Row>
                    <SubmitButton
                      type="submit"
                      secondary
                      disabled={isSubmitting}
                    >
                      Send details
                    </SubmitButton>
                  </Row>
                </Form>
              )}
            />
          </Fragment>
        )}
      </Fragment>
    );
  }
}
