import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import styled, { css } from 'styled-components';
import { clearFix, mix } from 'polished';
import { colors, spacing, media } from '../../styles';
import { wrapper, cover, card } from '../../styles/mixins';
import uppercaseFirstChar from '../../helpers/uppercaseFirstChar';
import Dropdown from '../../components/Dropdown';
import Input, { InputError, Textarea } from '../../components/Input';
import Button from '../../components/Button';
import Header from '../home/components/Header';
import Footer from '../../components/Footer';
import { LABELS } from './constants';

// const check = (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//     <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
//   </svg>
// );

const Bg = styled.div`
  background: linear-gradient(#f6fbff, #eef7fe);
  height: 568px;
  margin-top: -114px;
`;

const Root = styled.section`
  position: relative;
  min-height: 100%;
`;

const Main = styled.div`
  position: relative;
  z-index: 3;
  height: 720px;
  padding-top: ${spacing()};
  color: #fff;
  text-align: center;

  ${media.max768} {
    height: 584px;
  }
`;

const Cover = styled.div`
  ${cover};
  height: 114%;
  background: linear-gradient(-135deg, #00a6ff, #004286);

  ${'' /* background-color: ${colors.secondary}; */} ${'' /* background-image: url(${heroBackground});
  background-size: cover; */}
  transform: matrix(1, -0.08, 0, 1, 0, -116);

  ${props =>
    props.formSuccess &&
    css`
      height: 86%;
    `};
`;

const Cover2 = styled.div`
  ${cover};
  height: 114%;
  background: radial-gradient(circle at 70% 4%, #00dcff, #00deff00 40%);
  opacity: 0.5;
  ${'' /* background-color: ${colors.secondary}; */} ${'' /* background-image: url(${heroBackground});
  background-size: cover; */}
  transform: matrix(1, -0.08, 0, 1, 0, -116);
`;

const Wrapper = styled.div`
  ${wrapper};
  position: relative;
  padding: 0 ${spacing()};
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: ${spacing(1.5)} 0;

  @media (max-width: 460px) {
    padding-top: ${spacing(4)};
  }

  ${props =>
    props.formSuccess &&
    css`
      padding-top: 124px;
    `};
`;

const Title = styled.h1`
  position: relative;
  font-size: 42px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: ${spacing(1.5)};

  ${media.max768} {
    font-size: 31px;
  }

  ${media.max375} {
    font-size: 28px;
  }
`;

const Subtitle = styled.h2`
  position: relative;
  font-size: 20px;
  font-weight: 600;
  opacity: 0.9;
  max-width: 482px;
  margin: 0 auto 64px;
  color: #fff;

  ${media.max768} {
    font-size: 19px;
    max-width: 400px;
    margin: 0 auto ${spacing(3)};
  }

  ${media.max375} {
    font-size: 18px;
  }
`;

const Card = styled.div`
  ${card};
  overflow: initial;
  padding: ${spacing()};
  box-shadow: 0 15px 35px rgba(50, 73, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  max-width: 624px;

  @media (min-width: 641px) {
    padding: ${spacing(2)};
  }
`;

const Row = styled.div`
  ${clearFix()};
  margin-bottom: ${spacing(0.5)};
  text-align: left;

  &:last-child {
    margin-top: ${spacing()};
    margin-bottom: 0;
  }
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

  @media (min-width: 641px) {
    margin-left: 42%;
    width: auto;
    padding: 0 20px;
  }
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
            checked={field.value.includes(props.value)}
            onChange={() => {
              if (field.value.includes(props.value)) {
                const nextValue = field.value.filter(
                  value => value !== props.value,
                );
                form.setFieldValue(props.name, nextValue);
              } else {
                const nextValue = field.value.concat(props.value);
                form.setFieldValue(props.name, nextValue);
              }
            }}
          />
          <CheckboxLabel htmlFor={props.value}>{props.value}</CheckboxLabel>
        </div>
      )}
    </Field>
  );
}

class BecomePartner extends React.Component {
  state = {
    form: {
      success: false,
    },
  };

  render() {
    const { form } = this.state;

    return (
      <Root>
        <Main>
          <Cover formSuccess={form.success} />
          <Cover2 />
          <Wrapper>
            <Header />
            <InnerWrapper formSuccess={form.success}>
              {form.success ? (
                <Fragment>
                  <Title>Thank you!</Title>
                  <Subtitle>
                    We’ll get back to you as soon as possible at {form.email}
                  </Subtitle>
                </Fragment>
              ) : (
                <Fragment>
                  <Title>Become a Partner</Title>
                  <Subtitle>
                    Thanks for showing your interest in BlockCluster Partership
                    Programme! Go ahead and fill in your details, and we’ll get
                    back to you.
                  </Subtitle>
                  <Card>
                    {form.error && <InputError>{form.error}</InputError>}
                    <Formik
                      initialValues={{
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        website: '',
                        interest: [],
                        comments: '',
                      }}
                      validationSchema={yup.object().shape({
                        name: yup.string().required(),
                        email: yup
                          .string()
                          .email()
                          .required(),
                        phone: yup.string().required(),
                        company: yup.string(),
                        website: yup
                          .string()
                          .matches(
                            /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
                            'Website must be a valid URL',
                          ),
                        interest: yup.array().required(),
                        comments: yup.string(),
                      })}
                      onSubmit={async (values, { setSubmitting }) => {
                        await axios
                          .post('/emails/become-partner', values)
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
                            <Column>
                              <Label htmlFor="name">{LABELS.name} *</Label>
                            </Column>
                            <Column>
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
                            </Column>
                          </Row>
                          <Row>
                            <Column>
                              <Label htmlFor="email">{LABELS.email} *</Label>
                            </Column>
                            <Column>
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
                            </Column>
                          </Row>
                          <Row>
                            <Column>
                              <Label htmlFor="phone">{LABELS.phone} *</Label>
                            </Column>
                            <Column>
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
                            </Column>
                          </Row>
                          <Row>
                            <Column>
                              <Label htmlFor="company">{LABELS.company}</Label>
                            </Column>
                            <Column>
                              <Input
                                type="text"
                                name="company"
                                id="company"
                                value={values.company}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="BlockCluster"
                              />
                              {errors &&
                                errors.company &&
                                touched.company && (
                                  <InputError>
                                    {uppercaseFirstChar(errors.company)}
                                  </InputError>
                                )}
                            </Column>
                          </Row>
                          <Row>
                            <Column>
                              <Label htmlFor="website">{LABELS.website}</Label>
                            </Column>
                            <Column>
                              <Input
                                type="text"
                                name="website"
                                id="website"
                                value={values.website}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="www.blockcluster.io"
                              />
                              {errors &&
                                errors.website &&
                                touched.website && (
                                  <InputError>
                                    {uppercaseFirstChar(errors.website)}
                                  </InputError>
                                )}
                            </Column>
                          </Row>
                          <Row>
                            <Column>
                              <Label>{LABELS.interest} *</Label>
                            </Column>
                            <Column>
                              <Checkbox
                                name="interest"
                                value="Product Reseller"
                              />
                              <Checkbox
                                name="interest"
                                value="Consulting Partner"
                              />
                              <Checkbox
                                name="interest"
                                value="System Integrator"
                              />
                              <Checkbox
                                name="interest"
                                value="Strategic Partners"
                              />
                              {errors &&
                                errors.interest &&
                                touched.interest && (
                                  <InputError>
                                    {uppercaseFirstChar(errors.interest)}
                                  </InputError>
                                )}
                            </Column>
                          </Row>
                          <Row>
                            <Column>
                              <Label>{LABELS.comments}</Label>
                            </Column>
                            <Column>
                              <Textarea
                                name="comments"
                                id="comments"
                                value={values.comments}
                                onChange={handleChange}
                                placeholder="I would like to know the process and pricing"
                              />
                              {errors &&
                                errors.comments &&
                                touched.comments && (
                                  <InputError>
                                    {uppercaseFirstChar(errors.comments)}
                                  </InputError>
                                )}
                            </Column>
                          </Row>
                          <Row>
                            <SubmitButton
                              type="submit"
                              secondary
                              disabled={isSubmitting}
                            >
                              Submit
                            </SubmitButton>
                          </Row>
                        </Form>
                      )}
                    />
                  </Card>
                </Fragment>
              )}
            </InnerWrapper>
          </Wrapper>
        </Main>
        {!form.success && <Bg />}
        <Footer />
      </Root>
    );
  }
}

export default BecomePartner;
