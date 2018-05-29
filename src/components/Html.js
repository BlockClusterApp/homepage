import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import { injectGlobal } from 'styled-components';
import { lighten } from 'polished';
import config from '../config';
import { colors, spacing } from '../styles';

/* eslint-disable no-unused-expressions, react/no-danger */

injectGlobal`
  html {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    text-size-adjust: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background: ${colors.bgBody};
    color: ${colors.text};

    &:before {
      display: none;
    }
  }

  html,
  body,
  #app {
    height: 100%;
  }

  html,
  input,
  textarea,
  button {
    font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
  }

  article,
  aside,
  footer,
  header,
  main,
  nav,
  section,
  textarea {
    display: block;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: 400;
    line-height: 1.2;
    text-rendering: optimizeLegibility;
  }

  p {
    margin-top: 0;
    margin-bottom: ${spacing()};

    &:last-child {
      margin-bottom: 0;
    }
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: ${spacing()};
    padding-left: ${spacing()};

    &:last-child {
      margin-bottom: 0;
    }
  }

  a,
  button,
  label {
    transition: all .2s;

    &:active:not([disabled]) {
      transition-duration: .05s;
    }
  }

  a {
    background-color: transparent;

    &:hover,
    &:focus,
    &:active {
      outline: 0;
    }

    &,
    &:active,
    &:visited,
    &:hover {
      text-decoration: none;
      cursor: pointer;
    }
  }

  button {
    border: 0;
    outline: 0;
    padding: 0;
    cursor: pointer;
  }

  label {
    display: inline-block;
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }

  th {
    text-align: left;
  }

  img {
    box-sizing: content-box;
    border: 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
  }

  em {
    font-weight: 600;
    font-style: normal;
  }

  strong {
    font-weight: 400;
    font-style: italic;
  }

  button,
  input,
  select,
  optgroup,
  textarea {
    margin: 0;
    font: inherit;
    line-height: inherit;
    color: inherit;
  }

  button {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  input,
  textarea {
    outline: 0;
  }

  button,
  html input[type=button],
  input[type=reset],
  input[type=submit] {
    cursor: pointer;
    -webkit-appearance: button;
  }

  [readonly],
  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  input {
    line-height: normal;

    &:invalid {
      box-shadow: none;
    }
  }

  input[type=text],
  input[type=tel],
  input[type=number],
  input[type=email],
  input[type=search]::-webkit-search-cancel-button,
  input[type=search]::-webkit-search-decoration,
  input[type=search]::-webkit-search-results-button,
  input[type=search]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  input[type=checkbox],
  input[type=radio] {
    padding: 0;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }

  input[type=search] {
    box-sizing: content-box;
    -webkit-appearance: textfield;
  }

  input[type=text][disabled]
  input[type=email][disabled]
  input[type=password][disabled] {
    -webkit-text-fill-color: ${colors.text};
  }

  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 100px #fff;
  }

  textarea {
    vertical-align: top;
    overflow: auto;
    resize: vertical;
  }

  ::-webkit-input-placeholder {
    color: ${lighten(0.3, colors.text)};
    -webkit-font-smoothing: antialiased;
  }

  :-moz-placeholder {
    color: ${lighten(0.3, colors.text)};
    opacity: 1;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
  }

  ::-moz-placeholder {
    color: ${lighten(0.3, colors.text)};
    opacity: 1;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
  }

  :-ms-input-placeholder {
    color: ${lighten(0.3, colors.text)};
    -webkit-font-smoothing: antialiased;
  }
`;

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    styleElement: PropTypes.node.isRequired,
    app: PropTypes.object, // eslint-disable-line
    children: PropTypes.string.isRequired,
    canonical: PropTypes.string.isRequired,
    noRobots: PropTypes.bool,
  };

  static defaultProps = {
    scripts: [],
    noRobots: false,
  };

  render() {
    const {
      title,
      description,
      styleElement,
      scripts,
      app,
      children,
      noRobots,
      canonical,
    } = this.props;
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <link rel="canonical" href={canonical} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="title" content={title} />
          <meta name="description" content={description} />
          <meta name="author" content="Blockcluster" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@blockcluster" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:site_name" content="Blockcluster" />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://blockcluster-web.herokuapp.com/"
          />
          <meta property="og:locale" content="en_US" />
          <meta
            property="og:image"
            content="https://blockcluster-web.herokuapp.com/og-image.png"
          />
          <meta property="og:image:type" content="image/png" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content={colors.primary} />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content={colors.primary} />
          {noRobots && <meta name="robots" content="noindex, nofollow" />}
          {styleElement}
          <script
            dangerouslySetInnerHTML={{
              __html: `WebFontConfig = {
              google: { families: [
                'Source+Sans+Pro:300,400,600,700',
                'Montserrat:300,400,500,600,700'
              ] }
            };
            (function(d) {
              var wf = d.createElement('script'), s = d.scripts[0];
              wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
              s.parentNode.insertBefore(wf, s);
            })(document);`,
            }}
          />
        </head>
        <body>
          <div
            id="app"
            dangerouslySetInnerHTML={{
              __html: children,
            }}
          />
          <script
            dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }}
          />
          {scripts.map(script => <script key={script} src={script} />)}
          {config.analytics.googleTrackingId && (
            <script
              dangerouslySetInnerHTML={{
                __html:
                  'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
                  `ga('create','${
                    config.analytics.googleTrackingId
                  }','auto');ga('send','pageview')`,
              }}
            />
          )}
          {config.analytics.googleTrackingId && (
            <script
              src="https://www.google-analytics.com/analytics.js"
              async
              defer
            />
          )}
        </body>
      </html>
    );
  }
}

export default Html;
