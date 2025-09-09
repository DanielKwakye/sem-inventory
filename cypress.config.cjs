const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 8000,
    // baseUrl: 'http://localhost:5173',
    baseUrl: "https://inventory-sem-3-mun.web.app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});