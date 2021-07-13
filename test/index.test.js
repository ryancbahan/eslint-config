const fs = require('fs')
const eslint = require('eslint')

function getErrors(configFile, fileToTest) {
  const CLIEngine = eslint.CLIEngine;

  const cli = new CLIEngine({
    configFile: configFile,
  });

  return cli.executeOnText(fs.readFileSync(fileToTest, 'utf8'));
}

describe('Validate ESLint configs', () => {
  ['index.js'].forEach((file) => {
    it(`load config ${file} in ESLint to validate all rules are correct`, () => {
      expect(getErrors(file, 'index.js').results[0].messages).toEqual([])
    })
  })
})