const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://directly.dzencode.net/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 3000,
    retries: 2,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
