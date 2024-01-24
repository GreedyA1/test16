
const PROXY_CONFIG = [
  {
      context: [
      ],
      target: tokens.Target,
      secure: false,
      changeOrigin: true,
      headers: tokenHeaders,
      logLevel: 'debug',
  },
]

module.exports = PROXY_CONFIG
