/* eslint-disable @typescript-eslint/no-var-requires */
const shell = require('shelljs')
const fs = require('fs')

const jsonPath = './src/assets/i18n/en.json'
const translationsFile = fs.readFileSync(jsonPath)
const translations = JSON.parse(translationsFile)

const translationsFilePath = 'src/constants/translations.ts'

const toUpperCase = (line) => line.toUpperCase().replace(/\.|\-/g, '_')

const generateEnumLine = (key) => {
  shell
    .ShellString(` ${toUpperCase(key.replace())} = "${key}",\n`)
    .toEnd(translationsFilePath)
}

const generateTranslationsEnum = () => {
  shell
    .ShellString('/* AUTO GENERATED FILE. DO NOT MODIFY !!! */\n\n')
    .to(translationsFilePath)

  const keys = Object.keys(translations)

  shell.ShellString('export enum Translations {\n').toEnd(translationsFilePath)

  keys.forEach(generateEnumLine)

  shell.ShellString('}\n\n').toEnd(translationsFilePath)
  shell
    .ShellString('/* AUTO GENERATED FILE. DO NOT MODIFY !!! */')
    .toEnd(translationsFilePath)
}

generateTranslationsEnum()

shell.exec(`prettier --write ${translationsFilePath}`)
