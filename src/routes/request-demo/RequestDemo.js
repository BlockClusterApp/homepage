import React, { Fragment } from 'react';
import { Formik, Field } from 'formik';
import Dropdown from 'react-dropdown';
import * as yup from 'yup';
import styled, { css, keyframes, injectGlobal } from 'styled-components';
import { clearFix, mix, hiDPI, shade, darken, lighten } from 'polished';
import logo2x from './assets/logo@2x.png';
import { colors, spacing, media, uppercase } from '../../styles';
import { wrapper, cover, card } from '../../styles/mixins';

const check = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
  </svg>
);

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

const LogoCaps = styled.span`
  font-size: 22px;
  font-weight: 400;
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

  &:hover {
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

      &:hover {
        background: ${lighten(0.05, '#03b0e9')};
      }

      &:active {
        background: ${darken(0.05, '#03b0e9')};
      }
    `};
`;

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
    width: 100%;
    font-size: 17px;
    background: #eef5fb;
    border: 1px solid #eef5fb;
    border-radius: 3px;
    padding: 8px 16px;
    transition: all 0.3s;
    color: ${colors.text};

    &.is-open {
      background: #fff;
      border-color: ${colors.primary};
    }
  }

  .Dropdown-placeholder {
    color: ${lighten(0.3, mix(0.8, colors.text, colors.primary))};
  }

  .Dropdown-menu {
    position: absolute;
    top: 38px;
    left: 0;
    width: 100%;
    z-index: 4;
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
`;

// Is this going to send a verification email to this email id? Also will this refrain them for using gmail ids?

// Company sector as >>>>Organization Name (Type box)
// Organization Type (drop down)
// Organization Size (drop down)

// Is there a budget for Blockchain Project? (Yes/No)
// How soon is your Blockchain project starting? Drop down (Weeks, Month, not scheduled yet)
// Are you a decision maker ? (Yes/No)

// Anything else >>>> Comment (hint text to be>>> I would like to know specific application of Blockcluster)

class RequestDemo extends React.Component {
  state = {
    blink: false,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ blink: !this.state.blink });
    }, 1000);
  }

  render() {
    return (
      <Fragment>
        <Root>
          <Cover />
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
            <InnerWrapper>
              <Title>Request a demo</Title>
              <Subtitle>
                Thanks for showing your interest in BlockCluster!<br />
                Go ahead and fill in your details, and we’ll get back to you.
              </Subtitle>
              <Card>
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
                    email: yup.string().email(),
                    website: yup.string().url(),
                    orgName: yup.string().required(),
                    orgType: yup.string().required(),
                    orgSize: yup.string().required(),
                    blockchainBudget: yup.bool().required(),
                    projectStarts: yup.string().required(),
                    decisionMaker: yup.bool().required(),
                    comments: yup.string().required(),
                  })}
                  onSubmit={(
                    values,
                    {
                      setSubmitting,
                      setErrors /* setValues and other goodies */,
                    },
                  ) => {
                    console.log(values);
                    // LoginToMyApp(values).then(
                    //   user => {
                    //     setSubmitting(false);
                    //     // do whatevs...
                    //     // props.updateUser(user)
                    //   },
                    //   errors => {
                    //     setSubmitting(false);
                    //     // Maybe transform your API's errors into the same shape as Formik's
                    //     setErrors(transformMyApiErrors(errors));
                    //   },
                    // );
                  }}
                  render={({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onChange={handleChange} onSubmit={handleSubmit}>
                      <Row>
                        <Column>
                          <Label htmlFor="name">Full name</Label>
                        </Column>
                        <Column>
                          <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="John Doe"
                          />
                          {errors.email &&
                            touched.email && (
                              <InputError>{errors.email}</InputError>
                            )}
                        </Column>
                      </Row>
                      <Row>
                        <Column>
                          <Label htmlFor="email">Work email</Label>
                        </Column>
                        <Column>
                          <Input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="john.doe@company.com"
                          />
                          {errors.email &&
                            touched.social.email && <div>{errors.email}</div>}
                        </Column>
                      </Row>
                      <Row>
                        <Column>
                          <Label htmlFor="website">Organization website</Label>
                        </Column>
                        <Column>
                          <Input
                            type="text"
                            name="website"
                            id="website"
                            placeholder="www.blockcluster.io"
                          />
                        </Column>
                      </Row>
                      <Row>
                        <Column>
                          <Label htmlFor="orgName">Organization name</Label>
                        </Column>
                        <Column>
                          <Input
                            type="text"
                            name="orgName"
                            id="orgName"
                            placeholder="BlockCluster"
                          />
                        </Column>
                      </Row>
                      <Row>
                        <Column>
                          <Label htmlFor="orgType">Organization type</Label>
                        </Column>
                        <Column>
                          <Input
                            type="text"
                            name="orgType"
                            id="orgType"
                            placeholder="Healthcare"
                          />
                        </Column>
                      </Row>
                      <Row>
                        <Column>
                          <Label htmlFor="orgSize">Organization size</Label>
                        </Column>
                        <Column>
                          <Input
                            type="text"
                            name="orgSize"
                            id="orgSize"
                            placeholder="50-100 employees"
                          />
                        </Column>
                      </Row>
                      <Row>
                        <Column>
                          <Label>
                            Is there a budget for a blockchain project?
                          </Label>
                        </Column>
                        <Column>
                          <Radio
                            name="blockchainBudget"
                            id="blockchainBudgetYes"
                            value="yes"
                          />
                          <RadioLabel htmlFor="blockchainBudgetYes">
                            Yes
                          </RadioLabel>
                          <Radio
                            name="blockchainBudget"
                            id="blockchainBudgetNo"
                            value="no"
                          />
                          <RadioLabel htmlFor="blockchainBudgetNo">
                            No
                          </RadioLabel>
                        </Column>
                      </Row>
                      <Row>
                        <Column>
                          <Label>
                            When is your blockchain project starting?
                          </Label>
                        </Column>
                        <Column>
                          <Dropdown
                            options={[
                              {
                                value: '1-2-weeks',
                                label: '1 to 2 weeks',
                              },
                              {
                                value: '2-4-weeks',
                                label: '2 to 4 weeks',
                              },
                              {
                                value: '1-2-months',
                                label: '1 to 2 months',
                              },
                              {
                                value: '2-6-months',
                                label: '2 to 6 months',
                              },
                              {
                                value: '6-weeks-plus',
                                label: 'more than 6 months',
                              },
                            ]}
                            // onChange={this._onSelect}
                            // value={defaultOption}
                            placeholder="Select an option"
                          />

                          <Input
                            type="text"
                            name="projectStarts"
                            id="projectStarts"
                            placeholder="1 to 2 weeks"
                          />
                        </Column>
                      </Row>
                      <Row>
                        <Column>
                          <Label>Are you a decision maker?</Label>
                        </Column>
                        <Column>
                          <Radio
                            name="decisionMaker"
                            id="decisionMakerYes"
                            value="yes"
                          />
                          <RadioLabel htmlFor="decisionMakerYes">
                            Yes
                          </RadioLabel>
                          <Radio
                            name="decisionMaker"
                            id="decisionMakerNo"
                            value="no"
                          />
                          <RadioLabel htmlFor="decisionMakerNo">No</RadioLabel>
                        </Column>
                      </Row>
                      <Row>
                        <Column>
                          <Label>Comment</Label>
                        </Column>
                        <Column>
                          <Textarea
                            name="comments"
                            id="comments"
                            placeholder="I would like to know a specific application of Blockcluster"
                          />
                        </Column>
                      </Row>
                      <Row>
                        <Column>&nbsp;</Column>
                        <Column>
                          <Button
                            type="submit"
                            secondary
                            disabled={isSubmitting}
                          >
                            Request demo
                          </Button>
                        </Column>
                      </Row>
                    </form>
                  )}
                />
              </Card>
            </InnerWrapper>
          </Wrapper>
        </Root>
        <Bg />
      </Fragment>
    );
  }
}

export default RequestDemo;
