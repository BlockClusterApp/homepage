/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: '/request-demo',
      load: () =>
        import(/* webpackChunkName: 'request-demo' */ './request-demo'),
    },
    {
      path: '/rsvp',
      load: () => import(/* webpackChunkName: 'rsvp' */ './rsvp'),
    },
    {
      path: '/events',
      load: () => import(/* webpackChunkName: 'events' */ './events'),
    },
    {
      path: '/become-partner',
      load: () =>
        import(/* webpackChunkName: 'become-partner' */ './become-partner'),
    },
    {
      path: '/privacy',
      load: () => import(/* webpackChunkName: 'privacy' */ './legal/privacy'),
    },
    {
      path: '/terms',
      load: () => import(/* webpackChunkName: 'terms' */ './legal/terms'),
    },
    {
      path: '/about',
      load: () => import(/* webpackChunkName: 'about' */ './legal/about'),
    },
    {
      path: '/pricing',
      load: () => import(/* webpackChunkName: 'pricing' */ './pricing'),
    },
    {
      path: '/contact',
      load: () => import(/* webpackChunkName: 'contact' */ './legal/contact'),
    },
    {
      path: '/partners',
      load: () => import(/* webpackChunkName: 'partners' */ './partners'),
    },
    {
      path: '/addons',
      load: () => import(/* webpackChunkName: 'addons' */ './addons'),
    },

    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = route.title
      ? `${route.title} - BlockCluster`
      : 'BlockCluster';
    route.description =
      route.description ||
      'Build and deploy powerful blockchain applications without writing any code. ' +
        'Setup your own enterprise grade blockchain ecosystems through a simple user interface.';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
