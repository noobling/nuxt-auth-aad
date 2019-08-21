const merge = require('lodash/merge')
const consola = require('consola')
const logger = consola.withScope('nuxt:auth')
const { resolve } = require('path')
const libRoot = resolve(__dirname, '..')

module.exports = function(moduleOptions) {
  if (!this.options.store) {
    logger.fatal('Enable vuex store by creating `store/index.js`')
  }

  const authOptions = this.options.auth

  checkValidOptions(authOptions)

  const defaultOptions = getDefaultOptions(authOptions)

  const options = merge({}, defaultOptions, authOptions)

  this.addPlugin({ src: resolve(libRoot, 'module', 'plugin.js'), options })
}

function checkValidOptions(options) {
  const requiredOptions = ['client_id', 'client_secret', 'tenant_id', 'scope']

  requiredOptions.forEach(requiredOption => {
    if (!Object.keys(options).some(optionKey => optionKey === requiredOption)) {
      logger.fatal(
        `Missing ${requiredOption} please set this in your nuxt config`
      )
    }
  })
}

function getDefaultOptions(options) {
  return {
    token_endpoint: `https://login.microsoftonline.com/${
      options.tenant_id
    }/oauth2/v2.0/token`,
    authorization_endpoint: `https://login.microsoftonline.com/${
      options.tenant_id
    }/oauth2/v2.0/authorize`,
    userinfo_endpoint: 'https://graph.microsoft.com/v1.0/me',
    response_type: 'code',
    grant_type: 'authorization_code',
  }
}

const defaultOptions = {
  grant_type: 'authorization_code',
  authorization_endpoint:
    'https://login.microsoftonline.com/413504eb-8622-47d2-aa72-ddbba4584471/oauth2/v2.0/authorize',
}
