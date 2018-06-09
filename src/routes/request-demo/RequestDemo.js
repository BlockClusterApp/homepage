import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import Dropdown from 'react-dropdown';
import * as yup from 'yup';
import styled, { css, injectGlobal } from 'styled-components';
import { clearFix, mix, shade, darken, lighten } from 'polished';
import logo2x from './assets/logo@2x.png';
import { colors, spacing, media, uppercase } from '../../styles';
import { wrapper, cover, card } from '../../styles/mixins';
import uppercaseFirstChar from '../../helpers/uppercaseFirstChar';
import { LABELS } from './constants';

const check = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
  </svg>
);

const chevronDown = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="#2d5f76" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
  </svg>
`;

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

const Header = styled.header`
  ${clearFix()};
  height: 34px;
  padding: 0;

  ${media.min768} {
    padding: ${spacing()} 0;
    height: 98px;
  }

  ${media.max768} {
    padding: ${spacing(0.5)};
  }

  ${media.max375} {
    padding: 0;
  }
`;

const Logo = styled.a`
  display: block;
  float: left;
  background: url(${logo2x}) no-repeat center;
  background-size: 178px 36px;
  width: 178px;
  height: 42px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const Nav = styled.nav`
  ${clearFix()};
`;

const NavLeft = styled.div`
  float: left;
  margin-left: ${spacing(2)};
`;

const NavRight = styled.div`
  float: right;
`;

const navItemCss = css`
  ${uppercase};
  float: left;
  display: block;
  line-height: 42px;
  padding: 0 ${spacing()};
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.2s;

  &:hover {
    color: #fff;
  }
`;

const NavItem = styled.a`
  ${navItemCss};
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: ${spacing(1.5)} 0;

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

const TitleSecondary = styled.span`
  font-size: 36px;
  font-weight: 600;
  color: ${colors.backgroundSecondaryText};
  position: relative;
  top: -5px;

  ${media.max768} {
    font-size: 25px;
  }

  ${media.max375} {
    font-size: 22px;
  }
`;

const BreakDesktop = styled.br`
  ${media.max768} {
    display: none;
  }
`;

const Subtitle = styled.h2`
  position: relative;
  font-size: 20px;
  font-weight: 600;
  opacity: 0.9;
  margin-bottom: ${spacing(4)};
  color: #fff;

  ${media.max768} {
    font-size: 19px;
    max-width: 400px;
    margin: 0 auto ${spacing(4)};
  }

  ${media.max375} {
    font-size: 18px;
  }
`;

const ButtonsWrapper = styled.div`
  display: inline-block;
  ${clearFix()};
  margin-bottom: ${spacing(4)};
`;

const Button = styled.a`
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

    &:after {
      opacity: 1;
    }
  }

  &:disabled {
    box-shadow: none;
    background: #bfccd4;
  }

  ${media.max374} {
    float: none;
    margin: 0 auto ${spacing()};
  }

  ${media.max768} {
    width: 160px;
    height: 42px;
    line-height: 42px;
  }

  ${props =>
    props.primary &&
    css`
      background: rgba(255, 255, 255, 0.9);
      color: ${colors.secondary};
      color: #026fbb;

      &:hover {
        background: #fff;
      }

      &:active {
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

const SubmitButton = Button.withComponent('button');

const NavButton = Button.extend`
  width: auto;
  padding: 0 20px;
  height: 42px;
  line-height: 42px;
  background: linear-gradient(20deg, #0392da, #03a1e4);
  box-shadow: none;
  color: #fff;

  &:before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    content: '';
    opacity: 0.1;
    transition: all 0.2s;
    background: #000;
  }

  &:before {
    z-index: 1;
  }

  &:hover,
  &:active {
    transform: none !important;
    box-shadow: none !important;
  }

  &:hover {
    background: linear-gradient(20deg, #0392da, #03a1e4);
    color: #fff;

    &:before {
      opacity: 0.2;
    }
  }

  &:active {
    &:before {
      opacity: 0.3;
    }
  }
`;

const NavButtonText = styled.span`
  display: inline-block;
  position: relative;
  z-index: 3;
  transition: all 0.2s;
`;

const Card = styled.div`
  ${card};
  padding: ${spacing(1.5)} ${spacing(2)} ${spacing(2)};
  box-shadow: 0 15px 35px rgba(50, 73, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  max-width: 624px;
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
  float: left;

  &:first-child {
    width: 40%;
  }

  &:last-child {
    width: 60%;
  }
`;

const Label = styled.label`
  font-size: 17px;
  font-weight: 600;
  line-height: 1.3;
  padding-top: 6px;
  color: ${mix(0.7, colors.text, colors.primary)};
`;

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

const Textarea = Input.withComponent('textarea').extend`
  min-height: ${spacing(6)};
`;

const Radio = Input.extend.attrs({
  type: 'radio',
})`
  width: auto;
  position: relative;
  top: -1px;
`;

const InputError = styled.div`
  font-size: 14px;
  color: ${colors.error};
  color: #ff4775;
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

// const Button = styled.a`
//   ${uppercase};
//   display: block;
//   text-align: center;
//   position: relative;
//   z-index: 2;
//   font-size: 14px;
//   float: right;
//   margin-right: ${spacing()};
//   width: 210px;
//   height: 44px;
//   line-height: 44px;
//   border-radius: 5px;
//   box-shadow: 0 7px 14px rgba(51, 72, 97, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
//   transition: all 0.2s;

//   &:last-child {
//     margin-right: 0;
//   }

//   ${props =>
//     props.secondary &&
//     css`
//       background: ${colors.primary};
//       color: #fff;

//       &:hover {
//         background: ${mix(0.6, colors.primary, colors.backgroundSecondaryText)};
//       }
//     `};
// `;

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  .Dropdown-root {
    cursor: pointer;
    position: relative;
    width: 100%;
    font-size: 17px;
    line-height: normal;
    background: #eef5fb;
    border: 1px solid #eef5fb;
    border-radius: 3px;
    padding: 8px 16px;
    transition: all 0.3s;
    color: ${colors.text};

    &:hover {
      background: #f6fbff;
      border-color: ${shade(0.95, '#eef5fb')};
    }

    &.is-open {
      background: #fff;
      border-color: ${colors.primary};
    }
  }

  .Dropdown-placeholder {
    color: ${lighten(0.3, mix(0.8, colors.text, colors.primary))};

    &.is-selected {
      color: ${colors.text};
    }
  }

  .Dropdown-menu {
    box-sizing: content-box;
    position: absolute;
    overflow: hidden;
    top: 42px;
    left: -1px;
    width: 100%;
    z-index: 4;
    border: 1px solid #e5e7e8;
    border-radius: 3px;
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, .08);
  }

  .Dropdown-option {
    cursor: pointer;
    padding: 8px 16px;
    background: #fff;
    color: ${lighten(0.2, mix(0.8, colors.text, colors.primary))};
    transition: all .2s;

    &:hover {
      background: #eef5fb;
      color: ${mix(0.7, colors.text, colors.primary)};
    }
  }

  .Dropdown-arrow {
    position: absolute;
    right: 0;
    top: 0;
    width: 38px;
    height: 38px;
    background-image: url('data:image/svg+xml;utf8,${chevronDown}');
    background-repeat: no-repeat;
    background-size: 13px;
    background-position: center;
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
            <Header>
              <Logo href="/" />
              <Nav>
                {/* <NavLeft>
                <NavItem>Features</NavItem>
                <NavItem>Use cases</NavItem>
                <NavItem>Pricing</NavItem>
              </NavLeft> */}
                <NavRight>
                  {/* <NavItem>Support</NavItem> */}
                  <NavButton primary href="http://blockcluster.io:3000/login">
                    <NavButtonText>Login</NavButtonText>
                  </NavButton>
                </NavRight>
              </Nav>
            </Header>
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
                    Thanks for showing your interest in BlockCluster!<br />
                    Go ahead and fill in your details, and we’ll get back to
                    you.
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
                                onChange={({ value }) => {
                                  this.setState({
                                    isSelectedOrgSize: true,
                                  });

                                  handleChange({
                                    persist: () => null,
                                    target: {
                                      id: 'orgSize',
                                      name: 'orgSize',
                                      type: 'select',
                                      value,
                                    },
                                  });
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
                                onChange={({ value }) => {
                                  this.setState({
                                    isSelectedProjectStarts: true,
                                  });

                                  handleChange({
                                    persist: () => null,
                                    target: {
                                      id: 'projectStarts',
                                      name: 'projectStarts',
                                      type: 'select',
                                      value,
                                    },
                                  });
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
                            <Column>&nbsp;</Column>
                            <Column>
                              <SubmitButton
                                type="submit"
                                secondary
                                disabled={isSubmitting}
                              >
                                Request demo
                              </SubmitButton>
                            </Column>
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
