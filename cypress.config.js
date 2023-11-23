const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "p858ck",
  videoCompression: true,
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do curso de Cypress',
      reportPageTitle: 'Projeto do curso de Cypress',
    },
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
});
