// work in progress

const fs = require('fs')
const path = require('path')

// Path to the enum file
const enumFilePath = path.join(__dirname, '../src/constants/translations.ts')
// Directory to scan for references
const projectDir = path.join(__dirname, '../src')

// Extract enum keys and values
const enumFileContent = fs.readFileSync(enumFilePath, 'utf-8')
const enumRegex = /export enum (\w+)\s*\{([^}]+)\}/g
const enumMatch = enumRegex.exec(enumFileContent)
const enumName = enumMatch[1]
const enumEntries = enumMatch[2]
  .split(',')
  .map((entry) => entry.trim().split('='))
enumEntries.pop()
const enumKeys = enumEntries.map((entry) => entry[0].trim())
const enumValues = enumEntries.map((entry) =>
  entry[1].trim().replace(/["']/g, '')
)

// Function to recursively scan files
const scanFiles = (dir, callback) => {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      scanFiles(fullPath, callback)
    } else {
      callback(fullPath)
    }
  })
}

// Scan project files and track usage
const usedKeys = new Set()
scanFiles(projectDir, (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  enumKeys.forEach((key) => {
    const keyRegex = new RegExp(`\\b${enumName}\\.${key}\\b`, 'g')
    if (keyRegex.test(fileContent)) {
      usedKeys.add(key)
    }
  })
})

// List unused keys and their values
const unusedKeysWithValues = enumKeys
  .map((key, index) => ({
    key: key,
    value: enumValues[index],
  }))
  .filter((entry) => !usedKeys.has(entry.key))

const unusedTranslationKeys = unusedKeysWithValues.map((entry) => entry.value)
console.log('Unused Enum Keys and Values:\n', unusedTranslationKeys.join('\n'))
