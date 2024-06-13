const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  retries: {
    runMode: 1,

  },
  projectId: "nodpcq",
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
