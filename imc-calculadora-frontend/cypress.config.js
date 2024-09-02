const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Inclua ambos os padrões de caminho no specPattern
    specPattern: [
      "cypress/e2e/**/*.{cy.js,cy.jsx,cy.ts,cy.tsx}",
      "src/cypress/integration/**/*.{cy.js,cy.jsx,cy.ts,cy.tsx,spec.js}"
    ]
  },
});
