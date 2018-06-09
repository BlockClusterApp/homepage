import React, { Fragment } from 'react';
import { Formik, Form } from 'formik';
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
  padding: ${spacing()};
  box-shadow: 0 15px 35px rgba(50, 73, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  max-width: 624px;

  @media (min-width: 641px) {
    padding: ${spacing()};
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
      width: 40%;
    }

    &:last-child {
      width: 60%;
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

const Radio = styled.input.attrs({
  type: 'radio',
})`
  width: auto;
  position: relative;
  top: -1px;
`;

const RadioLabel = styled.label`
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
  padding: 0 20px;

  @media (min-width: 461px) {
    margin-left: 40%;
    width: auto;
  }
`;

class RequestDemo extends React.Component {
  state = {
    blink: false,
    form: {
      success: false,
    },
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ blink: !this.state.blink });
    }, 1000);
  }

  render() {
    const { form } = this.state;

    return (
      <Fragment>
        <Root>
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
                  <Title>Request a demo</Title>
                  <Subtitle>
                    Thanks for showing your interest in BlockCluster! Go ahead
                    and fill in your details, and we’ll get back to you.
                  </Subtitle>
                  <Card>
                    {form.error && <InputError>{form.error}</InputError>}
                    <Formik
                      initialValues={{
                        name: '',
                        email: '',
                        website: '',
                        orgName: '',
                        orgType: '',
                        orgSize: '',
                        blockchainBudget: '',
                        projectStarts: '',
                        decisionMaker: '',
                        comments: '',
                      }}
                      validationSchema={yup.object().shape({
                        name: yup.string().required(),
                        email: yup
                          .string()
                          .email()
                          .required(),
                        website: yup
                          .string()
                          .matches(
                            /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
                            'Website must be a valid URL',
                          )
                          .required(),
                        orgName: yup.string().required(),
                        orgType: yup.string().required(),
                        orgSize: yup.string().required(),
                        blockchainBudget: yup.string().required(),
                        projectStarts: yup.string().required(),
                        decisionMaker: yup.string().required(),
                        comments: yup.string(),
                      })}
                      onSubmit={async (values, { setSubmitting }) => {
                        await axios
                          .post('/emails/request-demo', values)
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
                              <Label htmlFor="name">{LABELS.name}</Label>
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
                              <Label htmlFor="email">{LABELS.email}</Label>
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
                              <Label htmlFor="orgName">{LABELS.orgName}</Label>
                            </Column>
                            <Column>
                              <Input
                                type="text"
                                name="orgName"
                                id="orgName"
                                value={values.orgName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="BlockCluster"
                              />
                              {errors &&
                                errors.orgName &&
                                touched.orgName && (
                                  <InputError>
                                    {uppercaseFirstChar(errors.orgName)}
                                  </InputError>
                                )}
                            </Column>
                          </Row>
                          <Row>
                            <Column>
                              <Label htmlFor="orgType">{LABELS.orgType}</Label>
                            </Column>
                            <Column>
                              <Input
                                type="text"
                                name="orgType"
                                id="orgType"
                                value={values.orgType}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="Healthcare"
                              />
                              {errors &&
                                errors.orgType &&
                                touched.orgType && (
                                  <InputError>
                                    {uppercaseFirstChar(errors.orgType)}
                                  </InputError>
                                )}
                            </Column>
                          </Row>
                          <Row>
                            <Column>
                              <Label htmlFor="orgSize">{LABELS.orgSize}</Label>
                            </Column>
                            <Column>
                              <Dropdown
                                id="orgSize"
                                name="orgSize"
                                placeholderClassName={
                                  this.state.isSelectedOrgSize
                                    ? 'is-selected'
                                    : ''
                                }
                                options={[
                                  '1 to 5 employees',
                                  '5 to 10 employees',
                                  '11 to 50 employees',
                                  '51 to 100 employees',
                                  '101 to 500 employees',
                                  'more than 500 employees',
                                ]}
                                onChange={event => {
                                  this.setState({
                                    isSelectedOrgSize: true,
                                  });

                                  handleChange(event);
                                }}
                                value={values.orgSize}
                                placeholder="Select an option"
                              />
                              {errors &&
                                errors.orgSize &&
                                touched.orgSize && (
                                  <InputError>
                                    {uppercaseFirstChar(errors.orgSize)}
                                  </InputError>
                                )}
                            </Column>
                          </Row>
                          <Row>
                            <Column>
                              <Label>{LABELS.blockchainBudget}</Label>
                            </Column>
                            <Column>
                              <Radio
                                name="blockchainBudget"
                                id="blockchainBudgetYes"
                                value="Yes"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                checked={values.blockchainBudget === 'Yes'}
                              />
                              <RadioLabel htmlFor="blockchainBudgetYes">
                                Yes
                              </RadioLabel>
                              <Radio
                                name="blockchainBudget"
                                id="blockchainBudgetNo"
                                value="No"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                // here we have to explicitely check for false
                                // since an empty string is falsy too
                                checked={values.blockchainBudget === 'No'}
                              />
                              <RadioLabel htmlFor="blockchainBudgetNo">
                                No
                              </RadioLabel>
                              {errors &&
                                errors.blockchainBudget &&
                                touched.blockchainBudget && (
                                  <InputError>
                                    {uppercaseFirstChar(
                                      errors.blockchainBudget,
                                    )}
                                  </InputError>
                                )}
                            </Column>
                          </Row>
                          <Row>
                            <Column>
                              <Label>{LABELS.projectStarts}</Label>
                            </Column>
                            <Column>
                              <Dropdown
                                id="projectStarts"
                                name="projectStarts"
                                placeholderClassName={
                                  this.state.isSelectedProjectStarts
                                    ? 'is-selected'
                                    : ''
                                }
                                options={[
                                  '1 to 2 weeks',
                                  '2 to 4 weeks',
                                  '1 to 2 months',
                                  '2 to 6 months',
                                  'more than 6 months',
                                ]}
                                onChange={event => {
                                  this.setState({
                                    isSelectedProjectStarts: true,
                                  });
                                  handleChange(event);
                                }}
                                value={values.projectStarts}
                                placeholder="Select an option"
                              />
                              {errors &&
                                errors.projectStarts &&
                                touched.projectStarts && (
                                  <InputError>
                                    {uppercaseFirstChar(errors.projectStarts)}
                                  </InputError>
                                )}
                            </Column>
                          </Row>
                          <Row>
                            <Column>
                              <Label>{LABELS.decisionMaker}</Label>
                            </Column>
                            <Column>
                              <Radio
                                name="decisionMaker"
                                id="decisionMakerYes"
                                value="Yes"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                checked={values.decisionMaker === 'Yes'}
                              />
                              <RadioLabel htmlFor="decisionMakerYes">
                                Yes
                              </RadioLabel>
                              <Radio
                                name="decisionMaker"
                                id="decisionMakerNo"
                                value="No"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                // here we have to explicitely check for false
                                // since an empty string is falsy too
                                checked={values.decisionMaker === 'No'}
                              />
                              <RadioLabel htmlFor="decisionMakerNo">
                                No
                              </RadioLabel>
                              {errors &&
                                errors.decisionMaker &&
                                touched.decisionMaker && (
                                  <InputError>
                                    {uppercaseFirstChar(errors.decisionMaker)}
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
                                placeholder="I would like to know a specific application of Blockcluster"
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
                              Request demo
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
        </Root>
        {!form.success && <Bg />}
      </Fragment>
    );
  }
}

export default RequestDemo;
