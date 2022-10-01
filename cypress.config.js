const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://demoqa.com',
    projectId: 'wwww',
    specPattern: '**/*.cy.js',
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
  },
  env:{
    apiUrl: "https://demoqa.com"
  }
})
