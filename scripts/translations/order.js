/* eslint-disable @typescript-eslint/no-var-requires */
const shell = require('shelljs')
const fs = require('fs')

const jsonPaths = ['./src/assets/i18n/en.json']

const mainKeys = []
let enJson

const processFiles = (jsonPaths) => {
  for (const jsonPath of jsonPaths) {
    const translationsFile = fs.readFileSync(jsonPath)
    const translations = JSON.parse(translationsFile)

    let keys = Object.keys(translations)

    if (jsonPath === './src/assets/i18n/en.json') {
      enJson = translations
      mainKeys.push(...keys)
    } else {
      const missingKeys = mainKeys.filter((key) => !keys.includes(key))
      if (missingKeys.length) {
        console.log(`## Missing keys in ${jsonPath}:\n`)
        for (const key of missingKeys) {
          console.log(`"${key}": "${enJson[key]}",`)
        }
        console.log('\n')
      }
      const additionalKeys = keys.filter((key) => !mainKeys.includes(key))
      if (additionalKeys.length) {
        console.log(`## Additional keys in ${jsonPath}: Removing...\n`)
        for (const key of additionalKeys) {
          console.log(`"${key}": "${translations[key]}",`)
        }
        for (const key of additionalKeys) {
          delete translations[key]
        }
        keys = Object.keys(translations)
      }
    }

    const ordered = keys.sort().reduce((obj, key) => {
      obj[key] = translations[key]

      return obj
    }, {})

    shell.ShellString(JSON.stringify(ordered)).to(jsonPath)
    shell.exec(`prettier --write ${jsonPath}`)

    console.log(`\n================================\n`)
  }
}

processFiles(jsonPaths)
