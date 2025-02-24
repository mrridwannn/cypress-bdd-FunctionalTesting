const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // Menambahkan plugin Cucumber untuk preprocessor
  await addCucumberPreprocessorPlugin(on, config);

  // Menambahkan preprocessor untuk file .feature
  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Kembalikan config yang mungkin telah dimodifikasi oleh plugin
  return config;
}

module.exports = defineConfig({
  chromeWebSecurity: false,

  e2e: {
    video: true, // Aktifkan perekaman video
    screenshotOnRunFailure: true,
    testIsolation: false,
    chromeWebSecurity: false,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    specPattern: "cypress/e2e/**/*.feature", // Hanya jalankan file .feature di dalam folder e2e
    setupNodeEvents,
    env: {
      stepDefinitions: "cypress/step-definitions/**/*.js" // Akses semua step definitions di dalam folder ini
    }
  },
});
