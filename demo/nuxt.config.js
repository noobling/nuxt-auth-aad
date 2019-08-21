const { resolve } = require('path')
require('dotenv').config()

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  build: {
    extractCSS: true,
  },
  // serverMiddleware: ['../api/auth'],
  modules: ['@nuxtjs/dotenv', '@@'],
  auth: {
    client_id: process.env.AAD_CLIENT_ID,
    client_secret: process.env.AAD_CLIENT_SECRET,
    tenant_id: process.env.AAD_TENANT_ID,
    scope: ['user.read'],
    grant_type: 'authorization_code',
  },
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': 'http://localhost:3000',
  },
}
