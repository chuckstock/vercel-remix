const { flatRoutes } = require('remix-flat-routes')

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  serverDependenciesToBundle: [
    '@rainbow-me/rainbowkit',
    '@rainbow-me/rainbowkit/wallets',
    'react-dnd-touch-backend',
    /^@?wagmi.*/,
    'wretch',
    'wretch/middlewares',
    'buffer-polyfill',
  ],
  future: {
    v2_meta: true,
    unstable_cssSideEffectImports: true,
    v2_routeConvention: true,
  },
}
