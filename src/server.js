import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import winston from 'winston';
import axios from 'axios';
import expressWinston from 'express-winston';
import React from 'react';
import ReactDOM from 'react-dom/server';
import PrettyError from 'pretty-error';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import nodemailer from 'nodemailer';
import App from './components/App';
import Html from './components/Html';
import ErrorPage from './routes/error/ErrorPage';
import router from './router';
// import assets from './asset-manifest.json'; // eslint-disable-line import/no-unresolved
import chunks from './chunk-manifest.json'; // eslint-disable-line import/no-unresolved
import config from './config';
import { LABELS as REQUEST_DEMO_LABELS } from './routes/request-demo/constants';

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
  // send entire app down. Process manager will restart it
  process.exit(1);
});

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

const app = express();

//
// Configure winston logger
// -----------------------------------------------------------------------------
winston.configure({
  transports: [
    // ...config.log.development ? [
    //   new winston.transports.File({
    //     level: config.log.levelFile,
    //     filename: config.log.filename,
    //     handleExceptions: true,
    //     json: true,
    //     maxsize: 5242880,
    //     maxFiles: 5,
    //     colorize: false,
    //   }),
    // ] : [],
    new winston.transports.Console({
      level: config.log.levelConsole,
      handleExceptions: true,
      colorize: config.log.colorize,
      prettyPrint: config.log.prettyPrint,
      timestamp: config.log.timestamp,
    }),
  ],
});

axios.interceptors.request.use(
  req => {
    // eslint-disable-next-line
    const { method, url, headers, body } = req;

    winston.info(
      `REQUEST ${method.toUpperCase()} ${url}`,
      config.log.prettyPrint
        ? {
            headers,
            body,
          }
        : JSON.stringify({
            headers,
            body,
          }),
    );
    return req;
  },
  error => {
    winston.error(error);
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  res => {
    const { status, statusText, headers, request, data } = res;
    const {
      method,
      res: { responseUrl },
    } = request;

    winston.info(
      `RESPONSE ${status} ${statusText} ${method.toUpperCase()} ${responseUrl}`,
      config.log.prettyPrint
        ? {
            headers,
            data,
          }
        : JSON.stringify({
            headers,
            data,
          }),
    );

    return res;
  },
  error => {
    winston.error(error);
    return Promise.reject(error);
  },
);

//
// If you are using proxy from external machine, you can set TRUST_PROXY env
// Default is to trust proxy headers only from loopback interface.
// -----------------------------------------------------------------------------
app.set('trust proxy', config.trustProxy);

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  expressWinston.logger({
    winstonInstance: winston,
    meta: true,
    expressFormat: true,
    colorStatus: config.log.colorStatus,
  }),
);

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  try {
    const context = {
      pathname: req.path,
      query: req.query,
    };
    const sheet = new ServerStyleSheet();
    const route = await router.resolve(context);

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect);
      return;
    }

    const data = { ...route };
    data.canonical = data.canonical || req.path;
    data.children = ReactDOM.renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <App context={context}>{route.component}</App>
      </StyleSheetManager>,
    );
    data.styleElement = sheet.getStyleElement();

    const scripts = new Set();
    const addChunk = chunk => {
      if (chunks[chunk]) {
        chunks[chunk].forEach(asset => scripts.add(asset));
      } else if (__DEV__) {
        throw new Error(`Chunk with name '${chunk}' cannot be found`);
      }
    };
    addChunk('client');
    if (route.chunk) addChunk(route.chunk);
    if (route.chunks) route.chunks.forEach(addChunk);

    data.scripts = Array.from(scripts);
    data.app = {};

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(route.status || 200);
    res.send(`<!doctype html>${html}`);
  } catch (err) {
    next(err);
  }
});

//
// Email from request a demo
// -----------------------------------------------------------------------------
app.post('/emails/request-demo', async (req, res, next) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jason.hasperhoven@blockcluster.io',
        pass: 'bcinthemix',
      },
    });

    const resetStyles = {
      fontFamily: 'Helvetica Neue',
      fontSize: '16px',
      padding: 0,
      margin: 0,
    };

    const mailOptions = {
      from: 'jason.hasperhoven@blockcluster.io',
      to: 'jason.hasperhoven@blockcluster.io',
      subject: 'Demo request',
      html: ReactDOM.renderToStaticMarkup(
        <React.Fragment>
          <p
            style={{
              ...resetStyles,
              fontSize: '21px',
              fontWeight: 500,
              paddingBottom: '32px',
              color: '#111',
            }}
          >
            Demo request from the website
          </p>
          {Object.entries(req.body).map(([key, value]) => (
            <React.Fragment>
              <p
                style={{
                  ...resetStyles,
                  fontSize: '18px',
                  fontWeight: 500,
                  paddingBottom: '4px',
                  color: '#111',
                }}
              >
                {REQUEST_DEMO_LABELS[key]}
              </p>
              <p
                style={{
                  ...resetStyles,
                  paddingBottom: '16px',
                  color: '#111',
                }}
              >
                {value}
              </p>
            </React.Fragment>
          ))}
        </React.Fragment>,
      ),
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        res.status(400).json({
          error: err,
        });
        return;
      }

      console.info(err);
      res.status(200).json({
        info,
      });
    });
  } catch (err) {
    next(err);
  }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(pe.render(err));
  const html = ReactDOM.renderToStaticMarkup(
    <Html title="Internal Server Error" description={err.message}>
      {ReactDOM.renderToString(<ErrorPage error={err} />)}
    </Html>,
  );
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
if (!module.hot) {
  app.listen(config.port, () => {
    console.info(`The server is running at http://localhost:${config.port}/`);
  });
}

//
// Hot Module Replacement
// -----------------------------------------------------------------------------
if (module.hot) {
  app.hot = module.hot;
  module.hot.accept('./router');
}

export default app;
