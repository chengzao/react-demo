const SentryCliPlugin = require('@sentry/webpack-plugin');

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  if(process.env.NODE_ENV === 'production'){
    config.plugins.push(
      new SentryCliPlugin({
        include: './build',
        urlPrefix: '~/static/js/',
        ignoreFile: '.sentrycliignore',
        ignore: ['node_modules', 'webpack.config.js'],
        configFile: 'sentry.properties',
      })
    )
  }
  return config;
}