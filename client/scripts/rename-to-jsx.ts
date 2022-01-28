import fs from 'fs'
import { resolve } from 'path'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const args = require('minimist')(process.argv.slice(2))

const dry = args.dry || args.d
// Change this to whereever you want to rename the files
const renamePath = resolve(__dirname, '../src/components')

// npx esno ./scripts/change-to-jsx.ts -d ./src/components
// Rename files from .js to .jsx and .ts to .tsx
const renameJsFiles = (parentPath: string) => {
  fs.readdirSync(parentPath).forEach((file) => {
    const filePath = resolve(parentPath, file)
    if (fs.lstatSync(filePath).isDirectory()) {
      return renameJsFiles(filePath)
    }
    const ext = file.split('.').pop()
    if (['ts', 'js'].some((e) => e === ext)) {
      const newName = file.replace(`.${ext}`, `.${ext}x`)
      const newFilePath = resolve(parentPath, newName)
      if (dry) {
        return console.log(`${filePath} -> ${newFilePath}`)
      }
      return fs.renameSync(filePath, newFilePath)
    }
  })
}

renameJsFiles(renamePath)
