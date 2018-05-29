/* eslint-disable max-len */

const mapWebEnv = map => map[process.env.WEB_ENV || 'development'];

if (process.env.BROWSER) {
  throw new Error(
    'Do not import `config.js` from inside the client-side code.',
  );
}

module.exports = {
  // Node.js app
  port: process.env.PORT || 80,

  // https://expressjs.com/en/guide/behind-proxies.html
  trustProxy: process.env.TRUST_PROXY || 'loopback',

  appUrl: process.env.APP_URL || 'http://blockcluster.io:3000',

  log: {
    levelConsole: 'silly',
    levelFile: 'info',
    colorize: mapWebEnv({
      development: true,
      staging: false,
      production: false,
    }),
    prettyPrint: mapWebEnv({
      development: true,
      staging: false,
      production: false,
    }),
    colorStatus: mapWebEnv({
      development: true,
      staging: false,
      production: false,
    }),
    timestamp: mapWebEnv({
      development: true,
      staging: false,
      production: false,
    }),
    // filename: '../log/app.log',
  },

  // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: 'UA-115486976-1', // UA-XXXXX-X
  },
};
