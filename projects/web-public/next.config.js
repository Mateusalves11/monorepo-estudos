const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@gw/design-system',
  '@gw/utils'
]);

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withTM], {
  trailingSlash: true,
});