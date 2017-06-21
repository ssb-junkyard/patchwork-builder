const { join } = require('path')
const { readFileSync, writeFileSync } = require('fs')

const path = process.argv[2] || process.cwd()

addElectronDepFromDevDep(path)

function addElectronDepFromDevDep (path) {
  const pkgPath = join(path, 'package.json')
  const pkgFile = readFileSync(pkgPath)
  const pkg = JSON.parse(pkgFile)

  pkg.dependencies.electron = pkg.devDependencies.electron

  const nextPkgFile = JSON.stringify(pkg, null, 2)
  writeFileSync(pkgPath, nextPkgFile)
}
